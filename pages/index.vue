<script setup lang="ts">
</script>

<template>
	
	<PageArticle>
		
		<div v-motion-slide-visible-once-bottom class="intro-no-idea title">I have really no idea what to put here...</div>
		<div v-motion-slide-visible-once-bottom class="intro-no-idea">this page is still empty.</div>
		
	</PageArticle>
	
</template>

<style lang="less" scoped>

.intro-no-idea {
	
	color: darken(#6885c0, 20);
	text-align: center;
	letter-spacing: 0.1em;
	
	&.title {
		
		color: #6885c0;
		font-size: 3em;
		
		margin-block-start: 10rem;
		margin-block-end: 10rem;
		
		
	}
	
}

</style>
