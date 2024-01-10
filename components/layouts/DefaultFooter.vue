<script setup lang="ts">

defineProps<{
	inTitle?: boolean
}>()

</script>

<template>
	
	<div class="footer" :class="{ 'in-title': inTitle }">
		<div class="box">
			
			<p class="copy">Copyleft &copy; Sukazyo Workshop 2023</p>
			
			<!-- <hr>
			
			<p>
				You are visiting page {{ $route.path }}
			</p> -->
			
		</div>
	</div>
	
</template>

<style lang="less" scoped>

.footer {
	
	padding: 28px 36px;
	
	> .box {
		
		padding: 2em 3em;
		background-color: #f6f8fa;
		border-radius: 0.5em;
		
		p {
			margin: 0;
			font-size: 0.8rem;
			text-align: center;
			color: rgb(118, 120, 122);
		}
		
		hr {
			border: none;
			outline: none;
			height: 1.3px;
			background-color: #00000011;
		}
		
	}
	
	&.in-title {
		> .box {
			background-color: darken(#f6f8fa, 5%);
		}
	}
	
}

</style>
