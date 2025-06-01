<script setup lang="ts">
export interface ImgIconProps {
	src?: string;
}
defineProps<ImgIconProps>()
</script>

<template>
	
	<span v-if="src?.trimStart().startsWith('<svg')" class="icon img" v-html="src"></span>
	<img v-else :src="src" class="icon img" />
	
</template>

<style lang="stylus" scoped>

img.icon.img,
.icon.img > :deep(svg)
	height 1em
	vertical-align middle
	fill currentColor

</style>
