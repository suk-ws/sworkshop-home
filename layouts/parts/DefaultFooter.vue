<script setup lang="tsx">

import RandomParticlesPanel from '~/components/particles/RandomParticlesPanel.vue';
import I from '~/components/utils/icon/I';
import { randomInt } from '~/utils/random';


defineProps<{
	inTitle?: boolean
}>()

const ExtUrl = createReusableTemplate<{
	href: string,
	icon: string,
	deprecated?: boolean
}>()

</script>

<!-- To use this, add `vite-plugin-vue-nested-sfc` to your devDependencies
<component name="ExtUrl">
	<script setup lang="ts">
		import I from '~/components/utils/icon/I';
		defineProps<{
			href: string,
			icon: string,
			deprecated?: boolean
		}>()
	</script>
	<template>
		<a target="_blank" :href="href" class="ext-url">
			<I nerd>{{ icon }}</I>
			<span v-if="deprecated"><del><slot></slot></del></span>
			<span v-else><slot></slot></span>
		</a>
	</template>
	<style lang="stylus" scoped>
		.ext-url
			
			font-normalize()
			transition color 300ms
			&:hover
				color #80a8d1
			
			use-flex row
			gap 0.5em
			align-items center
			
	</style>
</component>
-->

<template>
	
	<div class="footer" :class="{ 'in-title': inTitle }">
		
		<!-- <div v-if="false" class="footerBodyConnector" /> -->
		
		<div class="message-box" :class="{ 'in-title': inTitle }">
			<div class="messages">
				<p>Copyright © 2023-2025 Sukazyo Workshop, and its affiliates.</p>
				<p>Made with <I :fill=1>breakfast_dining</I> and <I :fill=1>favorite</I></p>
			</div>
			<div class="separator"></div>
			<div class="ext-urls">
				
				<ExtUrl.define v-slot="{ $slots, href, icon, deprecated }">
					<a target="_blank" :href="href" class="ext-url">
						<I nerd>{{ icon }}</I>
						<span v-if="deprecated"><del><component :is="$slots.default" /></del></span>
						<span v-else><component :is="$slots.default" /></span>
					</a>
				</ExtUrl.define>
				
				<ExtUrl.reuse href="https://github.com/suk-ws" icon="nf-md-github">GitHub Home</ExtUrl.reuse>
				<ExtUrl.reuse href="https://github.com/suk-ws/sworkshop-home" icon="nf-md-git">This Website</ExtUrl.reuse>
				<ExtUrl.reuse href="https://book.sukazyo.cc" icon="nf-fa-book">Workshop Documentation</ExtUrl.reuse>
				<ExtUrl.reuse href="https://twitter.com/_suk_ws" icon="nf-fa-twitter_square" deprecated>Twitter (or x.com?)</ExtUrl.reuse>
				<ExtUrl.reuse href="https://a.sukazyo.cc/@workshop" icon="nf-md-mastodon" deprecated>Fediverse (Mastodon/Misskey)</ExtUrl.reuse>
				<ExtUrl.reuse href="https://bsky.app/profile/did:plc:b5mw7kbav3jzkt7qefvbdc7b" icon="nf-fae-butterfly">Official Bluesky</ExtUrl.reuse>
				
			</div>
		</div>
		
		<div class="background">
			<ClientOnly><RandomParticlesPanel :config="{
				labelType: { count: randomInt(1, 2) },
				blockType: { counts: {
						normal: randomInt(1, 2),
						highlight: randomInt(0, 1)
				}}
			}" /></ClientOnly>
		</div>
		
	</div>
	
	
	
</template>

<style lang="stylus" scoped>

.footer
	position relative
	use-flex column
	&.in-title
		> .box
			background-color darken(#f6f8fa, 5%)

// .footer-container
// 	z-index 100
// 	box-sizing border-box
// 	width 100%
// 	background-color #f6f8fa
// 	+dark-mode()
// 		background-color #302f2f
// 	&.no-background
// 		background-color unset
// 	position relative
// 	overflow hidden
// 	use-flex column

// .footer-body-connector
// 	z-index 9
// 	height 2rem
// 	background linear-gradient(#ffffffff, #ffffff00)
// 	+dark-mode()
// 		background linear-gradient(#000000ff, #00000000)

.message-box
	
	z-index 100
	box-sizing border-box
	margin 28px 36px
	padding 1.5em 3em
	min-height 5rem
	border-radius 0.5em
	background-color #e6ebf1cb
	&:hover, &.in-title
		background-color #e6ebf1ff
	font-size 0.8rem
	color #76787a
	+dark-mode()
		background-color #3b3938
		color #bdbcbc
	transition background-color 200ms
	
	use-flex row
	+onMediaThin()
		use-flex column
	gap 1.2em
	
	p
		clear-pad()
	> .messages
		flex 1 1 0
	> .ext-urls
		flex 0 0 auto
	> .separator
		flex 0 0 auto
		align-self stretch
		width 2px
		+onMediaThin()
			height 2px
			width auto
		border-radius 2px
		background-color #76787a49
		+dark-mode()
			background-color #bdbcbc49
	

.messages
	p
		+ p
			margin-block-start 1em

.ext-urls
	
	use-flex column
	gap 0.55em
	
	> a
		
		font-normalize()
		transition color 300ms
		&:hover
			color #80a8d1
		
		use-flex row
		gap 0.5em
		align-items center
		
	

.background
	position absolute
	pos 0
	overflow hidden

</style>
