<template>
	
	<Head>
		<Title>the Sukayzo Workshop</Title>
	</Head>
	
	<NuxtLayout>
		<NuxtPage></NuxtPage>
	</NuxtLayout>
	
</template>

<style lang="less">

@import "~/assets/css/main.less";

html {
	width: 100%;
	height: 100%;
}

html,
body,
#document {
	
	min-width: 100%;
	min-height: 100%;
	margin: 0;
	padding: 0;
	font-family: var(--font-doc);
	scroll-behavior: smooth;
	
}

#document::before {
	content: "";
	display: flex;
}

*::selection {
	background-color: hsla(0, 0%, 50%, 0.18);
}

</style>
