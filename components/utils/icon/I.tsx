import type { Slots } from "vue"
import type { MaterialSymbolProps } from "./MaterialSymbol.vue"
import type { NFProps } from "./NFIcon.vue"
import type { JSX } from "vue/jsx-runtime"
import NFIcon from "./NFIcon.vue"
import MaterialSymbol from "./MaterialSymbol.vue"
import ImgIcon, { type ImgIconProps } from "./ImgIcon.vue"

export type IconModel =
	{ material?: boolean } & MaterialSymbolProps |
	{ nerd: true } & NFProps |
	{ img: true } & ImgIconProps

export function Icon (props: Omit<IconModel, 'icon'> & { icon?: string, [key: string]: any }, context: { slots: Slots } ): JSX.Element {
	const slotText = (() => {
		if ('icon' in props && typeof props.icon == 'string') {
			return props.icon
		}
		try {
			const slotContent = context.slots.default?.() as VNode[]
			if (slotContent && slotContent.length > 0) {
				const firstChild = slotContent[0].children
				if (typeof firstChild === 'string') {
					return firstChild.trim()
				} else {
					throw new Error(`Icon content is not a string but ${typeof firstChild}`)
				}
			}
		} catch (e) {
			console.error('Error getting icon definition, does the icon content is not a string?', e)
		}
		return ""
	})()
	const _ = {
		...props,
		icon: slotText
	}
	if ('nerd' in _)
		return <NFIcon {..._} />
	else if ('img' in _)
		return <ImgIcon {..._} />
	else
		return <MaterialSymbol {..._} />
}

export const I = Icon
export default I

export type IconDefinition = IconModel | string | JSX.Element

export function IconFrom (props: {i: IconDefinition}): JSX.Element {
	if (typeof props.i === 'string') {
		if (!props.i.match(/^[0-9a-zA-Z_-]*$/)) {
			return <ImgIcon src={props.i} {...props} />
		} else if (props.i.startsWith('nf-')) {
			return <NFIcon icon={props.i} />
		} else {
			return <I>{props.i}</I>
		}
	} else if ('type' in props.i) {
		// return <RenderNode is={props.i} />
		return props.i
	} else {
		return <I {...props.i} />
	}
}
