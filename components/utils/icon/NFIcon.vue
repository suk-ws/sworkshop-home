<script setup lang="ts">

export type NFProps = {
	icon: string
	defaults?: boolean
}

// const slots = defineSlots<{
// 	default (): any
// }>()

const props = defineProps<NFProps>()
const iconDef = computed<string>(() => {
	// try {
	// 	const slotContent = slots.default?.() as VNode[]
	// 	if (slotContent && slotContent.length > 0) {
	// 		const firstChild = slotContent[0].children
	// 		if (typeof firstChild === 'string') {
	// 			return firstChild.trim()
	// 		} else {
	// 			throw new Error(`Icon content is not a string but ${typeof firstChild}`)
	// 		}
	// 	}
	// } catch (e) {
	// 	console.error('Error getting icon definition, does the icon content is not a string?', e)
	// }
	// return ""
	return props.icon
})

const symbolName = computed(() => {
	if (iconDef.value.startsWith('nf-'))
		return iconDef.value.substring('nf-'.length)
	else return iconDef.value
})
const inherit_mode = computed(() => !props.defaults)

</script>

<template>
	<span :class="['nf', 'nerd-font', `nf-${symbolName}`, {'inherit-mode': inherit_mode}]"></span>
</template>

<style lang="stylus" scoped>

// use Nerd Font (Symbols Only)
// @see https://www.nerdfonts.com/cheat-sheet
@import url("https://www.nerdfonts.com/assets/css/webfont.css")
@import "./icon-public"

.nf.nerd-font
	inherit-support()

</style>
