import { classes } from "~/utils/element"
import css from "./fragments.module.styl"
import { trueOrUndef } from "~/utils/math"

export interface FragmentTypeAModel {
	children: string,
	useIndictor?: boolean
}

export function FragmentTypeA (_: FragmentTypeAModel): JSX.Element {
	return (
		<div className={classes(css.miniElement, css.typeA)}>
			{trueOrUndef(_.useIndictor) ? <div className={css.indictor}></div> : ''}
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
