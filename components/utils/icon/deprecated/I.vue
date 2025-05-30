<script setup lang="ts">

import type { MaterialSymbolProps } from './MaterialSymbols.vue';
import MaterialSymbols from './MaterialSymbols.vue';
import type { NFProps } from './NFIcon.vue';
import NFIcon from './NFIcon.vue';

const slots = defineSlots<{
	default (): any
}>()
const slotText = computed<string>(() => {
	try {
		const slotContent = slots.default?.() as VNode[]
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
})

export type IconModel =
	{ nerd: true } & NFProps | 
	MaterialSymbolProps

export type Props = Omit<IconModel, 'icon'>
const props = defineProps<Props>()

const propsResult = computed<IconModel>(() => (
	Object.assign(
		{},
		useAttrs(),
		{ icon: slotText.value },
		props
	)
))

</script>

<template>
	
	<NFIcon v-if="'nerd' in propsResult" v-bind="propsResult" />
	<MaterialSymbols v-else v-bind="propsResult" />
	
</template>

<style lang="stylus" scoped></style>