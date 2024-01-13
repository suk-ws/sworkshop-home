export function classes (...classes: (string|null)[]) {
	return classes.filter(x => x != null).join(' ')
}

export function posXY (x: string, y: string): React.CSSProperties {
	return {
		left: x,
		top: y,
	}
}
