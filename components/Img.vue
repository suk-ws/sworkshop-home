<script setup lang="ts">
defineProps<{
	link: String
	alt?: String
}>()
</script>

<template>
	
	<img class="img" :src="link" :alt="alt">
	
</template>

<style lang="less" scoped>

img {
	width: 100%;
	border-radius: 15px;
}

</style>
