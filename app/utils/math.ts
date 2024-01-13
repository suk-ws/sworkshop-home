export function trueOrUndef <T> (is: T) {
	return is === undefined || is
}

export function rangeInt (len: number, startsWith: number = 0): number[] {
	return Array.from({length: len}, (_, k) => k+startsWith)
}
