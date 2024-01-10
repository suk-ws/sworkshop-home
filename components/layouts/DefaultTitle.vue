<script setup lang="ts">
import { ModelPublic } from 'components/mini-elements/Public.vue';
import { StyleValue } from 'nuxt/dist/app/compat/vue-demi';

import { useElementVisibility } from '@vueuse/core';


function genRandomStyle () {
	return {
		top: `${Math.random()*100}%`,
		left: `${Math.random()*100}%`,
		// transform: `rotate(${Math.random()*360}deg)`
	}
}
function genRandomText (): string {
	var str: string = ""
	str += 'a';
	for (const {} of rangeInt(randomInt(0, 9))) {
		str += Math.random() > 0.8 ? '&nbsp;' : 'a'
	}
	str += 'a';
	return str;
}

type ModelPublicPositioned = ModelPublic & {
	position: StyleValue
}
const miniElements_Models = ref<Array<ModelPublicPositioned>>([]);

function update_miniElements () {
	miniElements_Models.value = []
	for ({} of rangeInt(5)) {
		// @ts-ignore
		miniElements_Models.value.push({
			position: genRandomStyle(),
			type: 'a',
			model: {
				html: genRandomText(),
				useIndictor: randomTrue(0.7)
			}
		})
	}
	for ({} of rangeInt(2)) {
		miniElements_Models.value.push({
			position: genRandomStyle(),
			type: 'b',
			model: {
				color: '#abcdef'
			}
		})
	}
	for ({} of rangeInt(1)) {
		miniElements_Models.value.push({
			position: genRandomStyle(),
			type: 'b',
			model: {
				color: '#efabab'
			}
		})
	}
}
onMounted(() => {
	update_miniElements();
})

// ---

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
				<template v-for="model of miniElements_Models"><Transition name="mini-float-item" appear><MiniElementsPublic
					class="mini-float-item"
					:style="model.position"
					:type="model.type"
					:model="model.model"
				></MiniElementsPublic></Transition></template>
			</ClientOnly>
		</div>
		
		<div class="foreground">
			
			<div class="area-title">
				<div class="description"><span>the Sukazyos and theirs -</span></div>
				<div class="title"><span>Sukazyo Workshop</span></div>
			</div>
			
			<Anchor uid="_page-start" ref="v_anchor"></Anchor>
			<slot name="nav">
				<div class="nav">
					
					<nav class="nav-bar">
						<LayoutsTitleNavItem to="/" class="root" no-active><img src="/favicon.ico" /></LayoutsTitleNavItem>
						<LayoutsTitleNavItem to="/members">Members</LayoutsTitleNavItem>
						<LayoutsTitleNavItem to="/projects">Projects</LayoutsTitleNavItem>
						<LayoutsTitleNavItem to="/services">Services</LayoutsTitleNavItem>
					</nav>
					
				</div>
			</slot>
			
		</div>
		
	</div>
	
</template>

<style lang="less" scoped>

.mini-float-item {
	
	position: absolute;
	opacity: 0.5;
	z-index: -1;
	
}

.mini-float-item-enter-active,
.mini-float-item-leave-active {
	transition: opacity 300ms ease;
}

.mini-float-item-enter-from,
.mini-float-item-leave-to {
	opacity: 0;
}

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
			
			color: #564c7f;
			
			.title {
				font-size: 56px;
				font-weight: bold;
				// font-family: 'FZMM';
				font-family: 'Baloo 2';
				letter-spacing: 0.16em;
			}
			
			.description {
				font-size: 18px;
				color: #69698578;
			}
			
		}
		
		>.nav {
			
			>.nav-bar {
				margin: 20px 28px;
				border-radius: 12px;
				// background-color: white;
				// background-color: #f6f8fa;
				background-color: #e8f0fe;
				
				font-size: 0.9rem;
				
				display: flex;
				padding: 0.8em;
				gap: 0.8em;
				flex-direction: row;
				flex-wrap: wrap;
				justify-content: space-around;
				align-items: flex-start;
				
				> .nav-item.root {
					flex: 0 0;
					img { height: 1rem; }
				}
				
				> .nav-item {
					flex: 1 1 0;
				}
				
			}
			
		}
		
	}
	
}

</style>
