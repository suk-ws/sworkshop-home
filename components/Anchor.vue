<script setup lang="ts">

defineProps<{
	uid: string
}>()

</script>

<template>
	
	<a href="#" :id="uid"></a>
	
</template>

<style lang="less" scoped>

a {
	display: hidden;
}

</style>
