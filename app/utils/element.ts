export function classes (...classes: (string|null)[]) {
	return classes.filter(x => x != null).join(' ')
}
