<script setup lang="ts">

import Article from '~/components/page/Article.vue';
import I from '~/components/utils/icon/I';
import { COMING_SOON } from '~/shared/const';

definePageMeta({
	layout: COMING_SOON ? 'coming-soon' : 'default'
})

</script>

<template>
	
	<Article v-if="!COMING_SOON">
		
		<h1>Title is here</h1>
		
		<p>Some content here. We should have a <I nerd>fa-heart</I> and <I :fill="1">favorite</I> here!</p>
		
		<!-- <div v-motion-slide-visible-once-bottom class="intro-no-idea title">I have really no idea what to put here...</div>
		<div v-motion-slide-visible-once-bottom class="intro-no-idea">this page is still empty.</div> -->
		
	</Article>
	
</template>

<style lang="stylus" scoped>

.intro-no-idea {
	
	color darken(#6885c0, 20)
	text-align center
	letter-spacing 0.1em
	
	&.title {
		
		color #6885c0
		font-size 3em
		
		margin-block-start 10rem
		margin-block-end 10rem
		
	}
	
}

</style>
