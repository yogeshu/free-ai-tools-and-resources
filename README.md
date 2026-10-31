# Free AI Tools and Resources

An open-source field guide and practical toolkit for accessing and using large language models affordably, locally, and privately.

This project is an independent community resource—not a directory of generic AI products. It focuses on information people can verify and use:

- Free and low-cost hosted APIs
- Local models and the hardware they need
- Provider limits, compatibility, privacy, and retention details
- Practical setup guides and developer examples
- Small tools that help people choose a model or provider

## What belongs here

Every provider or model record should link to an official source and include a `lastVerified` date. Verification of a URL does not prove that a quota is still available, so changing limits and availability should be reviewed by a contributor before being treated as current.

The repository is the source of truth for structured data. Websites and tools can consume these files, but should preserve the caveats and verification dates.

## Repository layout

```text
data/       Provider, model, and runner records
guides/     Practical setup and privacy documentation
schemas/    JSON Schemas for data files
scripts/    Validation and maintenance utilities
tools/      Interactive tools (planned)
```

## Quick start

```bash
node scripts/validate-data.js
```

The validator uses only Node.js built-ins and checks the repository's JSON data against its schemas and basic consistency rules.

## Contributions

Before submitting a contribution, read [CONTRIBUTING.md](CONTRIBUTING.md). Please prefer a small, well-sourced update over a large unverified list. Do not include API keys, personal data, or claims based only on an AI-generated summary.

## License

Code and documentation are available under the [MIT License](LICENSE). Data is also intended for reuse under the same license unless a source's terms require otherwise.

