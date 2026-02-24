import type { JSX } from "hono/jsx";
import { cn } from "@/lib/utils";

type SwitchProps = {
	checked?: boolean;
	disabled?: boolean;
	onCheckedChange?: (checked: boolean) => void;
	className?: string;
};

export function Switch({
	checked,
	disabled,
	onCheckedChange,
	className,
	class: cls,
	...props
}: SwitchProps & JSX.HTMLAttributes) {
	return (
		<button
			type="button"
			role="switch"
			aria-checked={checked}
			disabled={disabled}
			class={cn(
				"inline-flex relative w-11 h-6 rounded-full border-2 border-transparent transition-colors cursor-pointer inset-shadow bg-secondary-300 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50",
				className ?? cls,
			)}
			{...props}
		>
			<span
				class={cn(
					"inline-block w-5 h-5 bg-white rounded-full ring-0 shadow-lg transition-transform transform pointer-events-none",
					checked ? "translate-x-5" : "translate-x-0",
				)}
			/>
		</button>
	);
}
