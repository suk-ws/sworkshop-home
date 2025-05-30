<script setup lang="ts">

import ToTop from '~/components/floating/ToTop.vue';
import DefaultFooter from '~/components/layouts/DefaultFooter.vue';
import DefaultTitle from '~/components/layouts/DefaultTitle.vue';


const is_show_toTop = ref(false)
function is_show_toTop_set (new_val: boolean) { is_show_toTop.value = new_val }

</script>

<template>
	
	<div class="default-layout">
		
		<DefaultTitle @anchor-visible-change="new_val => is_show_toTop_set(!new_val)" ></DefaultTitle>
		
		<slot></slot>
		
		<DefaultFooter></DefaultFooter>
		
		<ToTop :show="is_show_toTop"></ToTop>
		
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
