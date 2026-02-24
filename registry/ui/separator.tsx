import type { JSX } from "hono/jsx";

import { cn } from "@/lib/utils";

function Separator({
	className,
	orientation = "horizontal",
	decorative = true,
	...props
}: JSX.HTMLAttributes & {
	orientation?: "horizontal" | "vertical";
	decorative?: boolean;
	className?: string;
}) {
	return (
		<div
			data-slot="separator"
			decorative={decorative}
			data-orientation={orientation}
			class={cn(
				"bg-secondary-200 shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
				className,
			)}
			{...props}
		/>
	);
}

export { Separator };
