import { classes, posXY, useTransitionAppear, useTransitionOf } from "~/utils/element";
import css from "./header.module.styl"
import React, { useRef } from "react";
import { randomInt, randomNumber, randomTrue } from "~/utils/random";
import { rangeInt } from "~/utils/math";
import Fragment, { FragmentPublicModel, FragmentTypeAModel } from "~/components/fragments";
import { _ret } from "~/utils/fp";
import { ClientOnly } from "remix-utils/client-only";
import { CSSTransition } from "react-transition-group"

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
function randFragmentsConfigs (): FragmentFloatingContainerConfig[] {
	return [
		...(rangeInt(8, 10).map(_ => _ret<FragmentFloatingContainerConfig>({
			floatingStyle: randPos(),
			model: {
				type: 'a',
				model: randFragmentModelTypeA()
			} as const
		}))),
		...(rangeInt(5).map(_ => _ret<FragmentFloatingContainerConfig>({
			floatingStyle: randPos(),
			model: {
				type: 'b',
				model: {
					color: fragmentTypeBColors.normal
				}
			} as const
		}))),
		...(rangeInt(2).map(_ => _ret<FragmentFloatingContainerConfig>({
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

export function FragmentCanvas (): JSX.Element {
	
	const fragments: FragmentFloatingContainerConfig[] = randFragmentsConfigs()
	
	return (
		<div className={css.fragmentCanvas}>
			{fragments.map((fragment, index) => (
				<FragmentFloatingContainer {...fragment} key={index}/>
			))}
		</div>
	)
	
}

export interface HeaderProps {
	inject?: JSX.Element
}
export default function Header(_: HeaderProps): JSX.Element {
	
	return (
		<div className={classes(css.header)}>
			
			<ClientOnly>{() => <FragmentCanvas />}</ClientOnly>
			
			<div className={classes(css.title)}>
				<div className={css.mainTitle}>
					<span>Sukazyo Workshop</span>
				</div>
				<div className={css.subTitle}>
					<span>coming soon...</span>
				</div>
			</div>
			
			{_.inject}
			
		</div>
	);
	
}