import { classes, posXY, useTransitionAppear, useTransitionOf } from "~/utils/element"
import css from "./fragments.module.styl"
import { rangeInt } from "~/utils/math"
import { useRef } from "react"
import { as$, _$, useOrElse } from "~/utils/fp"
import { randomNumber, randomInt, randomTrue } from "~/utils/random"
import { CSSTransition } from "react-transition-group"

export interface FragmentTypeAModel {
	children: string,
	useIndictor?: boolean
}

export function FragmentTypeA (_: FragmentTypeAModel): JSX.Element {
	return (
		<div className={classes(css.miniElement, css.typeA)}>
			{useOrElse(_.useIndictor, true) ? <div className={css.indictor}></div> : ''}
			<span>{_.children}</span>
			<span className={css.whiteSpace}></span>
		</div>
	)
}

export interface FragmentTypeBModel {
	color: string
}

export function FragmentTypeB (_: FragmentTypeBModel): JSX.Element {
	return (
		<div className={classes(css.miniElement, css.typeB)} style={{
			backgroundColor: _.color
		}}></div>
	)
}

export type FragmentPublicModel = {
	type: 'a',
	model: FragmentTypeAModel
} | {
	type: 'b',
	model: FragmentTypeBModel
}

const model: FragmentPublicModel = {
	type: 'b',
	model: {
		color: ""
	}
}
const model2: FragmentPublicModel = {
	type: 'a',
	model: {
		children: "",
		useIndictor: false
	}
}

export default function Fragment (_: FragmentPublicModel): JSX.Element {
	if (_.type == 'a')
		return <FragmentTypeA {..._.model} />
	else (_.type == 'b')
		return <FragmentTypeB {..._.model} />
}

function randPos (): React.CSSProperties {
	return {
		...posXY(`${randomNumber(0,100)}%`, `${randomNumber(0, 100)}%`),
		transform: `rotate(${randomNumber(0, 360)}deg)`
	}
}
function randText(): string {
	var str = ''
	str += 'a'
	rangeInt(randomInt(0, 9)).forEach(_ => {
		str += randomTrue(0.8) ? 'a' : 'nbsp;'
	})
	str += 'a'
	return str
}
function randFragmentModelTypeA (): FragmentTypeAModel {
	return {
		children: randText(),
		useIndictor: randomTrue(0.7)
	}
}
const fragmentTypeBColors = {
	normal: '#abcdef',
	highlight: '#efabab'
}

export interface FragmentFloatingContainerConfig {
	floatingStyle: React.CSSProperties,
	model: FragmentPublicModel
}

export function FragmentFloatingContainer (_: FragmentFloatingContainerConfig): JSX.Element {
	const ref_animated = useRef(null)
	return (
		<CSSTransition
		nodeRef={ref_animated}
		{...useTransitionAppear()}
		classNames={useTransitionOf(css)("fragment-container")}
		timeout={600}
		>
			<div ref={ref_animated} className={css.fragmentContainer} style={_.floatingStyle}>
				<Fragment {..._.model} />
			</div>
		</CSSTransition>
	)
}

export interface FragmentDrawCounts {
	typeA: number
	typeB_normal: number
	typeB_highlight: number
}
function randFragmentsConfigs (counts: FragmentDrawCounts): FragmentFloatingContainerConfig[] {
	
	return [
		...(rangeInt(counts.typeA).map(_ => as$<FragmentFloatingContainerConfig>({
			floatingStyle: randPos(),
			model: {
				type: 'a',
				model: randFragmentModelTypeA()
			} as const
		}))),
		...(rangeInt(counts.typeB_normal).map(_ => as$<FragmentFloatingContainerConfig>({
			floatingStyle: randPos(),
			model: {
				type: 'b',
				model: {
					color: fragmentTypeBColors.normal
				}
			} as const
		}))),
		...(rangeInt(counts.typeB_highlight).map(_ => as$<FragmentFloatingContainerConfig>({
			floatingStyle: randPos(),
			model: {
				type: 'b',
				model: {
					color: fragmentTypeBColors.highlight
				}
			} as const
		}))),
	]
}
export interface FragmentCanvasProps {
	/**
	 * Controls how much the fragments should generate.
	 * 
	 * If this is a number, this will be a default counts multiplier.
	 * 
	 * If this is a {@link FragmentDrawCounts} object, it will be used as-is.
	 */
	countConfig?: number|FragmentDrawCounts
}
export function FragmentCanvas (_: FragmentCanvasProps): JSX.Element {
	
	const fragmentsCounts: FragmentDrawCounts = _$(() => {
		if (_.countConfig === undefined) {
			return {
				typeA: randomInt(8, 10),
				typeB_normal: 5,
				typeB_highlight: 1
			}
		} else if (typeof _.countConfig == 'number') {
			const multiplier = _.countConfig
			return {
				typeA: randomInt(8*multiplier, 10*multiplier),
				typeB_normal: Math.round(5*multiplier),
				typeB_highlight: Math.round(1*multiplier)
			}
		} else return _.countConfig
	})
	
	const fragments: FragmentFloatingContainerConfig[] = randFragmentsConfigs(fragmentsCounts)
	
	return (
		<div className={css.fragmentCanvas}>
			{fragments.map((fragment, index) => (
				<FragmentFloatingContainer {...fragment} key={index}/>
			))}
		</div>
	)
	
}
