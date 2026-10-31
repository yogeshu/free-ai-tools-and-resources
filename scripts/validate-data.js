#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const providersPath = path.join(root, "data/providers.json");
const freeModelsPath = path.join(root, "data/free-api-models.json");
const localModelsPath = path.join(root, "data/local-models.json");

function readJson(file) {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (error) {
    throw new Error(`${path.relative(root, file)}: ${error.message}`);
  }
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function validateDate(value, label) {
  assert(typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value), `${label} must be YYYY-MM-DD`);
  assert(!Number.isNaN(Date.parse(`${value}T00:00:00Z`)), `${label} is not a valid date`);
}

const providers = readJson(providersPath);
const models = [...readJson(freeModelsPath), ...readJson(localModelsPath)];
assert(Array.isArray(providers), "providers.json must contain an array");
assert(Array.isArray(models), "model files must contain arrays");

const providerIds = new Set();
for (const provider of providers) {
  assert(provider && typeof provider === "object", "provider records must be objects");
  assert(typeof provider.id === "string" && !providerIds.has(provider.id), `invalid or duplicate provider id: ${provider.id}`);
  providerIds.add(provider.id);
  assert(typeof provider.website === "string" && /^https?:\/\//.test(provider.website), `${provider.id}: website must be an HTTP(S) URL`);
  assert(typeof provider.docs === "string" && /^https?:\/\//.test(provider.docs), `${provider.id}: docs must be an HTTP(S) URL`);
  validateDate(provider.lastVerified, `${provider.id}.lastVerified`);
}

const modelIds = new Set();
for (const model of models) {
  assert(model && typeof model === "object", "model records must be objects");
  assert(typeof model.id === "string" && !modelIds.has(model.id), `invalid or duplicate model id: ${model.id}`);
  modelIds.add(model.id);
  assert(providerIds.has(model.providerId), `${model.id}: unknown providerId ${model.providerId}`);
  assert(Array.isArray(model.capabilities) && model.capabilities.length > 0, `${model.id}: capabilities must not be empty`);
  validateDate(model.lastVerified, `${model.id}.lastVerified`);
}

console.log(`Validated ${providers.length} provider(s) and ${models.length} model(s).`);
