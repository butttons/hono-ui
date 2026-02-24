import { cn } from "../utils";

function Spinner({ className, ...props }: { className?: string }) {
	return (
		<i
			className={cn("animate-spin ph ph-circle-notch", className)}
			x-cloak
			x-transition:enter="transition ease-out duration-300"
			x-transition:enter-start="opacity-0 scale-90"
			x-transition:enter-end="opacity-100 scale-100"
			x-transition:leave="transition ease-in duration-300"
			x-transition:leave-start="opacity-100 scale-100"
			x-transition:leave-end="opacity-0 scale-90"
			{...props}
		/>
	);
}

export { Spinner };
