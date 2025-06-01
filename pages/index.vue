<script setup lang="tsx">

import Article from '~/components/page/Article.vue';
import Badge from '~/components/page/widgets/Badge.vue';
import I, { IconFrom } from '~/components/utils/icon/I';
import RenderNode from '~/components/utils/RenderNode.vue';
import { COMING_SOON } from '~/shared/const';

import icon_nerdFonts from "~/assets/icon/brand-icon/nerd-fonts.min.svg?raw";
import icon_googleFonts from "~/assets/icon/brand-icon/google-fonts.min.svg?raw";

definePageMeta({
	layout: COMING_SOON ? 'coming-soon' : 'default'
})

const jsx = <>
	<I>eco</I>
</>

const maybeJsx = "aaaa"

</script>

<template>
	
	<Article v-if="!COMING_SOON">
		
		<h1>Title is here</h1>
		
		<p>Some content here. We should have a <I nerd>fa-heart</I> and <I :fill="1">favorite</I> here!</p>
		
		<p>An badge component <Badge :icon="{icon: 'eco', fill: 1}" name="Badge" /> from <Badge :icon="{icon: 'eco', fill: 1}" name="Ann Tool Box" value="latest" />. Supports <Badge icon="nf-fa-face_smile" name="NerdFont Icons" /> and <Badge icon="adb" name="Material Symbols" value="Rounded" />!</p>
		<p>Test if element is render-able like <code>{{ `<RenderNode :is="<><I>eco</I></>" />` }}</code> <RenderNode :is="jsx" /> should be an icon and <code>{{ `<RenderNode is="aaaa" />` }}</code> <RenderNode :is="maybeJsx" /> is texts!</p>
		<p>Test if IconFrom element is working be like <code>{{ `<IconFrom :i="{icon: 'eco', fill: 1}" />` }}</code> <IconFrom :i="{icon: 'eco', fill: 1}" /> should be an icon! And there should be also icons that is <code>{{ `<IconFrom i="eco" />` }}</code> <IconFrom i="eco" /> or <code>{{ `<IconFrom :i="<><I>eco</I></>" />` }}</code> <IconFrom :i="jsx" /> renders!</p>
		
		<p style="color: blueviolet;">Test if <I img :src="icon_nerdFonts" /> can renders a svg icon! So that <Badge :icon="icon_nerdFonts" name="NerdFont Icons" value="webfont" /> can use it. And we can also have <Badge :icon="icon_googleFonts" name="Google Fonts" value="Material Symbols Rounded" /> as <I img :src="icon_googleFonts" /> Material Symbols!</p>
		
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
