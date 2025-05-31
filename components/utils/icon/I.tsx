import type { Slots } from "vue"
import type { MaterialSymbolProps } from "./MaterialSymbol.vue"
import type { NFProps } from "./NFIcon.vue"
import type { JSX } from "vue/jsx-runtime"
import NFIcon from "./NFIcon.vue"
import MaterialSymbol from "./MaterialSymbol.vue"

export type IconModel =
	{ material?: boolean } & MaterialSymbolProps |
	{ nerd: true } & NFProps

export function Icon (props: Omit<IconModel, 'icon'> & { [key: string]: any }, context: { slots: Slots } ): JSX.Element {
	const slotText = (() => {
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
	else
		return <MaterialSymbol {..._} />
}

export const I = Icon
export default I

