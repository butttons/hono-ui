import type { FC } from "hono/jsx";
import { cn } from "@/lib/utils";

export type Option = {
	label: string;
	value: string;
};

type SelectProps = {
	options: Option[];
	paramKey: string;
	class?: string;
	target: string;
	label: string;
	placeholder?: string;
	defaultValue?: string;
};

export const Select: FC<SelectProps> = (props) => {
	const selectData = {
		options: props.options,
		key: props.paramKey,
		label: props.label,
		target: props.target,
		defaultValue: props.defaultValue,
		placeholder: props.placeholder || "Select an option",
	};

	return (
		<>
			<script
				// biome-ignore lint/security/noDangerouslySetInnerHtml: Passing data to Alpine.js
				dangerouslySetInnerHTML={{
					__html: `if (!window.APP_DATA) window.APP_DATA = {}; window.APP_DATA['select_${props.paramKey}'] = ${JSON.stringify(selectData)};`,
				}}
			/>
			<div
				class={cn("relative", props.class)}
				x-data={`select_${props.paramKey}`}
			>
				<button
					type="button"
					role="combobox"
					aria-haspopup="listbox"
					aria-expanded="false"
					aria-controls={`listbox-${props.paramKey}`}
					aria-label={props.label}
					class="flex gap-2 justify-between items-center px-3 py-1 md:text-sm md:px-4 md:py-1.5 text-xs font-medium rounded-full border cursor-pointer border-secondary-200 bg-secon bg-secondary-100 hover:bg-secondary-200"
					x-on:click="handleToggle()"
					x-on:keydown="handleKeyDown($event)"
					x-bind:aria-expanded="isOpen"
					x-bind:aria-activedescendant="isOpen && getFocusedOptionId ? getFocusedOptionId : undefined"
				>
					<span x-text="getDisplayText"></span>
					<i class="ph ph-caret-down text-secondary-600" aria-hidden="true"></i>
				</button>

				<div
					x-cloak
					x-show="isOpen"
					x-transition=""
					role="listbox"
					id={`listbox-${props.paramKey}`}
					class="flex absolute z-50 flex-col mt-2 w-40 max-h-60 overflow-clip bg-white rounded-lg border shadow-lg max-w-60 border-secondary-200"
					x-on:keydown="handleKeyDown($event)"
					tabIndex={-1}
					{...{ "x-on:click.outside": "isOpen = false" }}
				>
					<template
						x-for="(option, index) in options"
						x-bind:key="option.value"
					>
						<button
							type="button"
							role="option"
							x-bind:id="getOptionIdForIndex(index)"
							x-bind:aria-selected="selectedValue === option.value"
							class="flex gap-2 px-3 py-2 text-sm text-left border-b cursor-pointer last-of-type:rounded-b-none hover:bg-secondary-100 outline-0 focus-visible:outline-0 focus-visible:bg-secondary-100 last:border-b-0 border-secondary-200"
							x-bind:class="{ 'bg-secondary-100': focusedIndex === index }"
							x-on:click="handleSelect(option.value)"
						>
							<span x-text="option.label"></span>
						</button>
					</template>
				</div>
			</div>
		</>
	);
};
