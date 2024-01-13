import { classes, posXY } from "~/utils/element";
import css from "./header.module.styl"
import React from "react";
import { randomInt, randomNumber, randomTrue } from "~/utils/random";
import { rangeInt } from "~/utils/math";
import Fragment, { FragmentPublicModel, FragmentTypeAModel } from "~/components/fragments";
import { _ret } from "~/utils/fp";
import { ClientOnly } from "remix-utils/client-only";

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
	return (
		<div className={css.fragmentContainer} style={_.floatingStyle}>
			<Fragment {..._.model}/>
		</div>
	)
}

export function FragmentCanvas (): JSX.Element {
	
	const fragments: FragmentFloatingContainerConfig[] = [
		...(rangeInt(8).map(_ => _ret<FragmentFloatingContainerConfig>({
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
	
	return (
		<div className={css.fragmentCanvas}>
			{fragments.map((fragment, index) => (
				<FragmentFloatingContainer {...fragment} key={index}/>
			))}
		</div>
	)
	
}

export default function Header(): JSX.Element {
	
	
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
			
		</div>
	);
	
}