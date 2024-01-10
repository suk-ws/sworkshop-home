<script setup lang="ts">
import { StyleValue } from 'nuxt/dist/app/compat/capi';

const props = withDefaults(defineProps<{
	fill?: boolean,
	wght?: number,
	grad?: number,
	opsz?: number
}>(), {
	fill: false,
	wght: 400,
	grad: 0,
	opsz: 24
})

const style = computed<StyleValue>(() => { return {
	fontVariationSettings: `'FILL' ${props.fill ? 1 : 0}, 'wght' ${props.wght}, 'GRAD' ${props.grad}, 'opsz' ${props.opsz}`
}})

</script>

<template>
	
	<span class="material-symbols material-symbols-rounded" :style="style"><slot></slot></span>
	
</template>

<style>

@import "~/assets/css/symbols.less";

.material-symbols {
	user-select: none;
}

</style>
