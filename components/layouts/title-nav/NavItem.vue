<script setup lang="ts">

const props = defineProps<{
	to: String
	noActive?: boolean
}>()

const active = computed(() => {
	if (props.noActive) return false
	return (props.to.trim() == useRoute().path.trim())
})

</script>

<template>
	
	<div class="nav-item" :class="{ 'active': active }">
		<RouterLink :to="to+'#_page-start'" :class="{ 'active': active }"><slot></slot></RouterLink>
	</div>
	
</template>

<style lang="less" scoped>

.nav-item {
	
	> a {
		
		display: block;
		// padding: 0.4em 0.9em;
		height: 35px;
		padding-inline-start: 1.2em;
		padding-inline-end: 1.2em;
		border-radius: 0.5em;
		
		color: #819ac7;
		text-decoration: none;
		cursor: pointer;
		transition: background-color 200ms;
		
		display: flex;
		align-items: center;
		justify-content: center;
		
		&:hover {
			background-color: lighten(#819ac7, 80%);
			// color: #f7faff;
		}
		
		&.active {
			background-color: #819ac7;
			color: #f7faff;
			cursor: default;
		}
		
	}
	
}

</style>
