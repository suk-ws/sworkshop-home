export function randomInt (min: number, max: number): number {
	return Math.floor(Math.random() * (max-min+1)) + min;
}

export function randomNumber (min: number, max: number): number {
	return Math.random() * (max-min+1) + min;
}

export function randomTrue (percent: number = 0.5) {
	return Math.random() < percent;
}

export function randomOne <T> (...selections: T[]): T {
	return selections[randomInt(0, selections.length-1)];
}
