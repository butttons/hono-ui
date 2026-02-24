# @butttons/hono-ui

Server-rendered UI components for Hono JSX. No client JS. Pure HTML and Tailwind.

Uses the [shadcn CLI](https://ui.shadcn.com/docs/cli) for component installation.

## Usage

Add a component directly from the registry:

```bash
shadcn add https://raw.githubusercontent.com/butttons/hono-ui/main/public/r/button.json
```

Or add the registry to your project and use short names:

```bash
shadcn registry add https://raw.githubusercontent.com/butttons/hono-ui/main/public/r/registry.json
shadcn add hono-ui/button
```

## Components

avatar, button, card, input, label, select, separator, skeleton, spinner, switch

## Peer Dependencies

`hono`, `class-variance-authority`, `clsx`, `tailwind-merge`

## License

MIT
