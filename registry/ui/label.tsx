import type { JSX } from "hono/jsx";
import { cn } from "@/lib/utils";

function Label({ className, class: cls, ...props }: JSX.HTMLAttributes) {
	return (
		// biome-ignore lint/a11y/noLabelWithoutControl: This is a fragment component
		<label
			data-slot="label"
			class={cn(
				"flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
				className ?? cls,
			)}
			{...props}
		/>
	);
}

export { Label };
