# @butttons/hono-ui

shadcn/ui for Hono. Server-rendered components, no client JS.

## Setup

Register the registry in your project:

```bash
shadcn registry add "@hono-ui=https://raw.githubusercontent.com/butttons/hono-ui/main/public/r/{name}.json"
```

## Usage

```bash
shadcn add @hono-ui/button
shadcn add @hono-ui/card
```

Or add directly via URL without registering:

```bash
shadcn add https://raw.githubusercontent.com/butttons/hono-ui/main/public/r/button.json
```

## Components

avatar, button, card, input, label, select, separator, skeleton, spinner, switch

## Peer Dependencies

`hono`, `class-variance-authority`, `clsx`, `tailwind-merge`

## License

MIT
