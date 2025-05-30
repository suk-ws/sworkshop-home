<script setup lang="ts">

export interface MaterialSymbolProps {
	/**
	 * The name or ID of the symbol/icon.
	 * 
	 * For now, icon name like `star` is accepted. The code point like `0xe834` is not
	 * supported yet.
	 */
	icon: string
	/**
	 * If the icon will be filled.
	 * 
	 * accepted a number within `0`-`1`. digitals within `0`-`1` like `0.5` is also
	 * supported that can make animations.
	 * 
	 * For more informations, see https://fonts.google.com/icons
	 */
	fill?: number
	/**
	 * Icon's stroke weight of the icon.
	 * 
	 * For more informations, see https://fonts.google.com/icons
	 */
	weight?: number
	/**
	 * Grade affect a symbol's thickness.
	 * 
	 * For more informations, see https://fonts.google.com/icons
	 */
	grade?: number
	/**
	 * Optical Size offers a way to automatically adjust the stroke weight when you
	 * increase or decrease the symbol size.
	 * 
	 * For more informations, see https://fonts.google.com/icons
	 */
	optical?: number
	/**
	 * If the icon should use Material Symbols default preset font-size line-height etc.
	 * 
	 * The default behavor of this component is no -- means this icons font-size and
	 * line-height etc will use the inherited value.
	 * 
	 * The default behavor of the Material Symbols library is yes. Set it to `true` to
	 * use this behavor.
	 */
	defaults?: boolean
}

const props = withDefaults(defineProps<MaterialSymbolProps>(), {
	fill: 0,
	weight: 400,
	grade: 0,
	optical: 24
})

const type = computed<string>(() => "rounded")
const inheritMode = computed<boolean>(() => !props.defaults)

</script>

<template>
	
	<span :class="['material-symbols', `material-symbols-${type}`, {'inherit-mode': inheritMode}]">{{ props.icon }}</span>
	
</template>

<style lang="stylus" scoped>

// use Google Material Symbols (Rounded)
// @see https://fonts.google.com/icons
@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200")

.material-symbols
	font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24 !important

.inherit-mode
	font-weight inherit
	font-style inherit
	font-size inherit
	font-variant inherit
	line-height inherit
	letter-spacing inherit
	text-transform inherit

</style>