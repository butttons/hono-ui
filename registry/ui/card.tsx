import type { JSX } from "hono/jsx";

import { cn } from "@/lib/utils";

function Card({ className, class: cls, ...props }: JSX.HTMLAttributes) {
	return (
		<div
			data-slot="card"
			class={cn(
				"flex flex-col gap-6 py-6 rounded-xl border shadow-sm bg-card text-card-foreground",
				className ?? cls,
			)}
			{...props}
		/>
	);
}

function CardHeader({ className, class: cls, ...props }: JSX.HTMLAttributes) {
	return (
		<div
			data-slot="card-header"
			class={cn(
				"@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
				className ?? cls,
			)}
			{...props}
		/>
	);
}

function CardTitle({ className, class: cls, ...props }: JSX.HTMLAttributes) {
	return (
		<div
			data-slot="card-title"
			class={cn("font-semibold leading-none", className ?? cls)}
			{...props}
		/>
	);
}

function CardDescription({ className, class: cls, ...props }: JSX.HTMLAttributes) {
	return (
		<div
			data-slot="card-description"
			class={cn("text-sm text-muted-foreground", className ?? cls)}
			{...props}
		/>
	);
}

function CardAction({ className, class: cls, ...props }: JSX.HTMLAttributes) {
	return (
		<div
			data-slot="card-action"
			class={cn(
				"col-start-2 row-span-2 row-start-1 justify-self-end self-start",
				className ?? cls,
			)}
			{...props}
		/>
	);
}

function CardContent({ className, class: cls, ...props }: JSX.HTMLAttributes) {
	return (
		<div
			data-slot="card-content"
			class={cn("px-6", className ?? cls)}
			{...props}
		/>
	);
}

function CardFooter({ className, class: cls, ...props }: JSX.HTMLAttributes) {
	return (
		<div
			data-slot="card-footer"
			class={cn("flex items-center px-6 [.border-t]:pt-6", className ?? cls)}
			{...props}
		/>
	);
}

export {
	Card,
	CardHeader,
	CardFooter,
	CardTitle,
	CardAction,
	CardDescription,
	CardContent,
};
