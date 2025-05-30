<script setup lang="ts">

import I from '~/components/utils/icon/I';


defineProps<{
	inTitle?: boolean
}>()

</script>

<template>
	
	<div class="footer" :class="{ 'in-title': inTitle }">
		
		<!-- <div v-if="false" class="footerBodyConnector" /> -->
		
		<div class="message-box">
			<div class="messages">
				<p>Copyright © 2023-2024 Sukazyo Workshop, and its affiliates.</p>
				<p>Made with <I fill=1>breakfast_dining</I> and <I fill=1>favorite</I></p>
			</div>
			<div class="separator"></div>
			<div class="ext-urls">
				<a target='_blank' href='https://github.com/suk-ws'>
					<I nerd>nf-md-github</I>
					<span>GitHub Home</span>
				</a>
				<a target='_blank' href='https://github.com/suk-ws/sworkshop-home'>
					<I nerd>nf-md-git</I>
					<span>This Website</span>
				</a>
				<a target='_blank' href='https://book.sukazyo.cc'>
					<I nerd>nf-fa-book</I>
					<span>Workshop Documentation</span>
				</a>
				<a target='_blank' href='https://twitter.com/_suk_ws'>
					<I nerd>nf-fa-twitter_square</I>
					<span><del>Twitter (or x.com?)</del></span>
				</a>
				<a target='_blank' href='https://a.sukazyo.cc/@workshop'>
					<I nerd>nf-md-mastodon</I>
					<span><del>Fediverse (Mastodon/Misskey)</del></span>
				</a>
				<a target='_blank' href='https://bsky.app/profile/did:plc:b5mw7kbav3jzkt7qefvbdc7b'>
					<I nerd>nf-fae-butterfly</I>
					<span>Official Bluesky</span>
				</a>
			</div>
		</div>
		
		<!-- <div class="box">
			<p class="copy">Copyleft &copy; Sukazyo Workshop 2023</p>
		</div> -->
		
	</div>
	
	
	
</template>

<style lang="stylus" scoped>

.footer
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
	background-color #e6ebf1
	font-size 0.8rem
	color #76787a
	+dark-mode()
		background-color #3b3938
		color #bdbcbc
	
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
		
	


</style>
