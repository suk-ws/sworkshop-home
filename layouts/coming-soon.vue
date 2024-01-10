<template>
	
	<div class="coming-soon-layout">
		
		<LayoutsDefaultTitle>
			<template #nav><LayoutsDefaultFooter in-title></LayoutsDefaultFooter></template>
		</LayoutsDefaultTitle>
		
		<slot></slot>
		
		
	</div>
	
</template>

<style lang="less" scoped>

.coming-soon-layout {
	
	width: 100%;
	height: 100%;
	
}

</style>
