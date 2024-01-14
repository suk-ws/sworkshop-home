export function rangeInt (len: number, startsWith: number = 0): number[] {
	return Array.from({length: len}, (_, k) => k+startsWith)
}
