import type { FC, JSX } from "hono/jsx";
import { cn } from "@/lib/utils";

export const Skeleton: FC<JSX.HTMLAttributes> = (props) => {
	return (
		<div
			class={cn("rounded-md animate-pulse bg-secondary-200", props.class)}
			{...props}
		/>
	);
};
