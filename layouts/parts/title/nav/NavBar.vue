<script setup lang="ts">
import NavItem from './NavItem.vue';

</script>

<template>
	
	<nav class="nav-bar">
		<NavItem to="/" class="root" no-active><img src="/favicon.ico" /></NavItem>
		<NavItem to="/members">Members</NavItem>
		<NavItem to="/projects">Projects</NavItem>
		<NavItem to="/services">Services</NavItem>
	</nav>
	
</template>

<style lang="stylus" scoped>

.nav-bar {
	
	margin 20px 28px
	border-radius 12px
	// background-color: white;
	// background-color: #f6f8fa;
	background-color #e8f0fe
	
	font-size 0.9rem
	
	display flex
	padding 0.8em
	gap 0.8em
	flex-direction row
	flex-wrap wrap
	justify-content space-around
	align-items flex-start
	
	> .nav-item.root {
		flex 0 0
		img { height: 1rem; }
	}
	
	> .nav-item {
		flex 1 1 0
	}
	
}


</style>