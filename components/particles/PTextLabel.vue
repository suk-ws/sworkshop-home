<script setup lang="ts">
import { trueOrUndef } from '~/utils/math';


export interface P_TextLabel_Model {
	html: string
	useIndictor?: boolean
}

defineProps<{
	model: P_TextLabel_Model
}>()

</script>

<template>
	
	<div class="particle text-label">
		<div v-if="trueOrUndef(model.useIndictor)" class="indictor"></div>
		<span v-html="model.html"></span>
		<span class="white-space"></span>
	</div>
	
</template>

<style lang="stylus" scoped>

@import "./particle-public"

.particle.text-label
	
	font-size 1rem
	particle-font()
	
	padding 0.6em 1.1em
	
	border-radius 0.5em
	> .span
		white-space: pre
	> .white-space
		display inline-block
		size 2em 1em
		// height: 1em
		// width: 2em
	
	> .indictor
		position absolute
		pos 0.35em
		left unset
		// top 0.35em
		// bottom 0.35em
		// right 0.35em
		width 0.3em
		border-radius 0.4em
		background-color #acbcd8
	

</style>
