import { CSSTransitionClassNames } from "react-transition-group/CSSTransition"

export function classes (...classes: (string|null)[]) {
	return classes.filter(x => x != null).join(' ')
}

export function posXY (x: string, y: string): React.CSSProperties {
	return {
		left: x,
		top: y,
	}
}

export function useTransitionAppear () {
	return {
		in: true,
		appear: true
	}
}

export function useTransitionOf (cssModule: any) {
	return function (name: string): CSSTransitionClassNames {
		return {
			appear: cssModule[name+'-appear'],
			appearActive: cssModule[name+'-appear-active'],
			appearDone: cssModule[name+'-appear-done'],
			enter: cssModule[name+'-enter'],
			enterActive: cssModule[name+'-enter-active'],
			enterDone: cssModule[name+'-enter-done'],
			exit: cssModule[name+'-exit'],
			exitActive: cssModule[name+'-exit-active'],
			exitDone: cssModule[name+'-exit-done'],
		}
	}
}
