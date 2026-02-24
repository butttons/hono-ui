import { cva, type VariantProps } from "class-variance-authority";
import type { Child, FC, JSX } from "hono/jsx";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-secondary-950 disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default: "bg-primary-500 text-white hover:bg-primary-500/90",
				destructive:
					"bg-red-50 text-red-500 hover:bg-red-500/90 hover:text-red-50",
				outline:
					"border border-secondary-300 bg-white  hover:bg-secondary-100 hover:text-secondary-900",
				secondary: "bg-secondary-900 text-white hover:bg-secondary-900/80",
				ghost: "hover:bg-secondary-100 hover:text-secondary-900 ",
				link: "text-secondary-900 underline-offset-4 hover:underline ",
			},
			size: {
				default: "h-9 px-4 py-2 text-sm",
				sm: "h-8 rounded-md px-3 text-xs",
				lg: "h-12 rounded-md px-8 text-base",
				block: "self-center h-10 px-8 py-6 rounded-lg text-base w-80",
				icon: "h-9 w-9",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);
type ButtonProps = {
	className?: string;
	children: Child;
	href?: string;
	component?: "button" | "a";
} & Omit<JSX.HTMLAttributes, "class">;

const Button: FC<ButtonProps & VariantProps<typeof buttonVariants>> = ({
	variant,
	size,
	component = "button",
	...props
}) => {
	const Comp = component;
	return (
		<Comp
			data-slot="button"
			class={cn(buttonVariants({ variant, size, className: props.className }))}
			{...props}
		/>
	);
};

export { Button, buttonVariants };
