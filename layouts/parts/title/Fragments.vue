<script lang="ts" setup>

import type { StyleValue } from 'vue';
import type { ModelPublic } from '~/components/mini-elements/MiniElements.vue';
import MiniElements from '~/components/mini-elements/MiniElements.vue';
import { randomInt, randomTrue } from '~/utils/random';
import { rangeInt } from '~/utils/range';


function genRandomStyle () {
	return {
		top: `${Math.random()*100}%`,
		left: `${Math.random()*100}%`,
		transform: `rotate(${Math.random()*360}deg)`
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

type ModelPublicPositioned = {
	position: StyleValue
	model: ModelPublic
}
const miniElements_Models = ref<ModelPublicPositioned[]>([]);

function update_miniElements () {
	miniElements_Models.value = []
	for ({} of rangeInt(5)) {
		// @ts-ignore
		miniElements_Models.value.push({
			position: genRandomStyle(),
			model: {
				type: 'a',
				model: {
					html: genRandomText(),
					useIndictor: randomTrue(0.7)
				}
			}
		})
	}
	for ({} of rangeInt(2)) {
		miniElements_Models.value.push({
			position: genRandomStyle(),
			model: {
				type: 'b',
				model: {
					color: '#abcdef'
				}
			}
		})
	}
	for ({} of rangeInt(1)) {
		miniElements_Models.value.push({
			position: genRandomStyle(),
			model: {
				type: 'b',
				model: {
					color: '#efabab'
				}
			}
		})
	}
}
onMounted(() => {
	update_miniElements();
})

</script>

<template>
	
	<template v-for="model of miniElements_Models"><Transition name="mini-float-item" appear><MiniElements
		class="mini-float-item"
		:style="model.position"
		v-bind="model.model"
	></MiniElements></Transition></template>
	
</template>

<style lang="stylus" scoped>

.mini-float-item {
	position absolute
	opacity 0.5
	z-index -1
}

.mini-float-item-enter-active,
.mini-float-item-leave-active {
	transition opacity 300ms ease
}

.mini-float-item-enter-from,
.mini-float-item-leave-to {
	opacity 0
}

</style>
