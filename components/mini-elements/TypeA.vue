<script setup lang="ts">

export interface TypeA_Model {
	html: string
	useIndictor?: boolean
}

defineProps<{
	model: TypeA_Model
}>()

</script>

<template>
	
	<div class="mini-elements type-a">
		<div v-if="trueOrUndef(model.useIndictor)" class="indictor"></div>
		<span v-html="model.html"></span>
		<span class="white-space"></span>
	</div>
	
</template>

<style lang="less" scoped>

@import "./mini-elements-public.less";

.mini-elements.type-a {
	
	font-size: 1rem;
	
	padding: 0.6em 1.1em;
	
	border-radius: 0.5em;
	.mini-element-public-font();
	> .span { white-space: pre; }
	> .white-space {
		display: inline-block;
		height: 1em;
		width: 2em;
	}
	
	> .indictor {
		
		position: absolute;
		top: 0.35em;
		bottom: 0.35em;
		right: 0.35em;
		width: 0.3em;
		border-radius: 0.4em;
		background-color: #acbcd8;
		
	}
	
}

</style>
