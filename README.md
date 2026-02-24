# @butttons/hono-ui

Server-rendered UI components for Hono JSX. No client JS. Pure HTML and Tailwind.

## Install

```bash
pnpm add @butttons/hono-ui
```

Peer dependencies: `hono`, `class-variance-authority`, `clsx`, `tailwind-merge`.

## Usage

```tsx
import { Button, Card, CardHeader, CardContent, cn } from "@butttons/hono-ui";

const Page = () => (
  <Card>
    <CardHeader>Title</CardHeader>
    <CardContent>
      <Button variant="default" size="sm">Click</Button>
    </CardContent>
  </Card>
);
```

## Components

- Avatar
- Button
- Card (Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent)
- Input
- Label
- Select
- Separator
- Skeleton
- Spinner
- Switch

## Tailwind

Add the package source to your Tailwind content paths so component classes get scanned:

```js
// tailwind.config or CSS @source directive
content: ["./node_modules/@butttons/hono-ui/src/**/*.tsx"]
```

## License

MIT
