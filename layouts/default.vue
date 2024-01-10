<script setup lang="ts">

const is_show_toTop = ref(false)
function is_show_toTop_set (new_val: boolean) { is_show_toTop.value = new_val }

</script>

<template>
	
	<div class="default-layout">
		
		<LayoutsDefaultTitle @anchor-visible-change="new_val => is_show_toTop_set(!new_val)" ></LayoutsDefaultTitle>
		
		<slot></slot>
		
		<LayoutsDefaultFooter></LayoutsDefaultFooter>
		
		<FloatingToTop :show="is_show_toTop"></FloatingToTop>
		
	</div>
	
</template>

<style lang="less" scoped>

.default-layout {
	
	width: 100%;
	height: 100%;
	
}

.to-top {
	bottom: 47px;
	right: 50px;
	z-index: 1100;
}

</style>
