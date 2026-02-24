# @butttons/hono-ui

Server-rendered Hono JSX UI components. No client JS. Tailwind + `cn` utility only.

## Structure

- `src/utils.ts` -- `cn` utility (clsx + tailwind-merge)
- `src/ui/` -- component files
- `src/index.ts` -- barrel export

## Code Style

- Prefer `type` over `interface`.
- Boolean variables prefixed with `is` or `has`.
- Functions take a single object parameter.
- Never use `any`.

## Publishing

Changesets for versioning. Tag-triggered GitHub Actions workflow publishes to npm.
