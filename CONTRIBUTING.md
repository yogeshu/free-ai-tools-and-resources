# Contributing

Thanks for helping keep this resource accurate and useful.

## Data changes

For each provider or model:

1. Use the official documentation or policy page as the source.
2. Record the URL and the date you verified it.
3. Distinguish permanent free access, promotional credits, and trials.
4. Say whether a payment method is required; use `unknown` when the source does not say.
5. Document privacy, retention, and training caveats without overstating them.
6. Run `node scripts/validate-data.js`.

An official URL check only confirms that a page is reachable. It does not confirm pricing, quotas, or availability. Those claims need human review.

## Pull requests

Keep pull requests focused and explain what changed and which sources were checked. If information is uncertain or likely to change, include that limitation in the record rather than guessing.

## Safety and privacy

Never commit credentials, private prompts, personal information, or provider tokens. Hosted APIs send prompts to an external service; local inference does not necessarily do so. Preserve that distinction in documentation and tool interfaces.

