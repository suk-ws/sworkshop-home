<script setup lang="ts">

export interface P_Block_Model {
	color: string
}

defineProps<{
	model: P_Block_Model
}>()

</script>

<template>
	
	<div class="particle block" :style="{ backgroundColor: model.color }"></div>
	
</template>

<style lang="stylus" scoped>

@import "./particle-public";

.particle.block {
	
	font-size 1rem
	particle-font()
	
	size 4em
	border-radius 0.5em
	
	
}

</style>
