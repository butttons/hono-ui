# @butttons/hono-ui

Server-rendered Hono JSX UI components distributed as a shadcn registry.

## Structure

- `registry/lib/utils.ts` -- `cn` utility (clsx + tailwind-merge)
- `registry/ui/` -- component source files
- `registry.json` -- shadcn registry manifest
- `public/r/` -- built registry output (committed)

## Adding a Component

1. Create the `.tsx` file in `registry/ui/`.
2. Import `cn` from `@/lib/utils` (shadcn rewrites this at install time).
3. Add an entry to `registry.json` with deps and `registryDependencies: ["utils"]`.
4. Run `pnpm build` to regenerate `public/r/`.

## Code Style

- Prefer `type` over `interface`.
- Boolean variables prefixed with `is` or `has`.
- No client JS. Server-rendered only.
