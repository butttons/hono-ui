import { cva, type VariantProps } from "class-variance-authority";
import type { FC, JSX } from "hono/jsx";
import { cn } from "../utils";

const inputVariants = cva(
	"flex rounded-md border border-secondary-200 bg-transparent text-sm  transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-secondary-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-50",
	{
		variants: {
			size: {
				default: "h-9 w-full px-3 py-1 ",
				sm: "h-8 rounded-md px-3 text-xs",
				lg: "h-12 w-full rounded-md px-4 py-2 text-lg",
				block: "self-center h-10 px-8 py-6 rounded-lg text-base w-80",
				icon: "h-9 w-9",
			},
		},
		defaultVariants: {
			size: "default",
		},
	},
);

export type InputProps = JSX.HTMLAttributes &
	VariantProps<typeof inputVariants>;

const Input: FC<InputProps> = ({ type, size, ...props }) => {
	return (
		<input
			type={type}
			className={cn(inputVariants({ size, className: props.class }))}
			{...props}
		/>
	);
};

export { Input };
