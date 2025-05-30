<script setup lang="ts">

import DefaultFooter from '~/layouts/parts/DefaultFooter.vue';
import DefaultTitle from '~/layouts/parts/title/DefaultTitle.vue';

</script>

<template>
	
	<div class="coming-soon-layout">
		
		<DefaultTitle>
			<template #nav><DefaultFooter in-title></DefaultFooter></template>
		</DefaultTitle>
		
		<slot></slot>
		
	</div>
	
</template>

<style lang="stylus" scoped>

.coming-soon-layout {
	
	width 100%
	height 100%
	
}

</style>
