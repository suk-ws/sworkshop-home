<script setup lang="ts">

import { useElementVisibility } from '@vueuse/core';
import Anchor from '~/components/Anchor.vue';
import Fragments from '~/components/particles/RandomParticlesPanel.vue';
import TitleTexts from './TitleTexts.vue';
import NavBar from './nav/NavBar.vue';

const emits = defineEmits<{
	(e: 'anchorVisibleChange', new_value: boolean): void
}>()

const v_anchor = ref<HTMLInputElement|null>(null)
const v_anchor_visible = useElementVisibility(v_anchor)
watch(v_anchor_visible, (new_val) => { emits('anchorVisibleChange', new_val) })


</script>

<template>
	
	<div class="head">
		
		<div class="background">
			<ClientOnly>
				<Fragments />
			</ClientOnly>
		</div>
		
		<div class="foreground">
			
			<div class="area-title">
				<TitleTexts />
			</div>
			
			<Anchor uid="_page-start" ref="v_anchor"></Anchor>
			<slot name="nav">
				<div class="nav">
					<NavBar />
				</div>
			</slot>
			
		</div>
		
	</div>
	
</template>

<style lang="less" scoped>

@import url('https://fonts.googleapis.com/css2?family=Baloo+2&text=Sukazyo%20Workshop&display=swap');

.head {
	
	width: 100%;
	height: 100vh;
	position: relative;
	overflow: hidden;
	background-color: #f6f8fa;
	
	> .background {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 1;
		width: 100%;
	}
	
	> .foreground {
		
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		z-index: 100;
		
		>.area-title {
			flex: 1 1 0;
			z-index: 100;
		}
		
		>.nav {
			flex: 0 0 auto;
			z-index: 80;
		}
		
		>.area-title {
			
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			
		}
		
	}
	
}

</style>
