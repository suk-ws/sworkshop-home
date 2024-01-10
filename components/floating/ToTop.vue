<script setup lang="ts">

defineProps<{
	show: Boolean
}>()

</script>

<template>
	
	<div class="to-top" :class="{'hidden': !show}">
		
		<I class="i">vertical_align_top</I>
		
	</div>
	
</template>

<style scoped lang="less">

.to-top {
	
	&.hidden { opacity: 0 !important; }
	
	position: fixed;
	width: 62px;
	height: 62px;
	border-radius: 16px;
	background-color: darken(#e8f0fe, 10);
	opacity: 0.35;
	transition: opacity 100ms;
	&:hover { opacity: 0.85; }
	
	display: flex;
	align-items: center;
	justify-content: center;
	.i {
		color: darken(#8aa2cc, 5);
		font-size: 30px;
	}
	
}

</style>