<script setup lang="ts">
import { COMING_SOON } from '~/shared/const';

</script>

<template>
	
	<div v-if="!COMING_SOON" class="description"><span>the Sukazyos and theirs -</span></div>
	<div class="title"><span>Sukazyo Workshop</span></div>
	<div v-if="COMING_SOON" class="description"><span>coming soon...</span></div>
	
</template>

<style lang="stylus" scoped>

.title {
	font-size 56px
	font-weight bold
	color #564c7f
	// font-family 'FZMM'
	font-family 'Baloo 2'
	letter-spacing 0.16em
}

.description {
	color #69698578
	font-size 18px
}

</style>
