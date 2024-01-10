<script setup lang="ts">

export interface TypeB_Model {
	color: string
}

defineProps<{
	model: TypeB_Model
}>()

</script>

<template>
	
	<div class="mini-elements type-b" :style="{ backgroundColor: model.color }"></div>
	
</template>

<style lang="less" scoped>

@import "./mini-elements-public.less";

.mini-elements.type-b {
	
	font-size: 1rem;
	
	width: 4em;
	height: 4em;
	
	border-radius: 0.5em;
	.mini-element-public-font();
	
}

</style>
