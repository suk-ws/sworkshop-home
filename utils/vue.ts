export function vueBool (value: boolean | undefined | string): boolean {
	if (value === undefined) {
		return false;
	}
	if (typeof value === 'string') {
		return true;
	}
	return value;
}