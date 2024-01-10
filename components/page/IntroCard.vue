<template>
	
	
	<div class="intro-card">
		<div class="side-left">
			<h2 class="title"><slot name="title"></slot></h2>
			<p class="introduce"><slot name="description"></slot></p>
		</div>
		<div class="side-right">
			<slot name="img"></slot>
		</div>
	</div>
	
</template>

<style lang="less" scoped>

.intro-card {
	
	display: grid;
	grid-gap: 5em;
	grid-template-columns: 10fr 8fr;
	
	> .side-left { grid-column: 1; grid-row: 1; }
	> .side-right { grid-column: 2; grid-row: 1; }
	
	> .side-left {
		
		color: #484a4f;
		
		> title {
			
		}
		
	}
	
	// > .side-right {
		
	// }
	
}

</style>
