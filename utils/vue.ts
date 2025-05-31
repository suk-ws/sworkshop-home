import type { JSX } from "vue/jsx-runtime";

export function vueBool (value: boolean | undefined | string): boolean {
	if (value === undefined) {
		return false;
	}
	if (typeof value === 'string') {
		return true;
	}
	return value;
}

export type VueNode = string | JSX.Element
