<script lang="ts" setup>

import type { StyleValue } from 'vue';
import { randomInt, randomTrue } from '~/utils/random';
import { rangeInt } from '~/utils/range';
import Particle, { type ParticleModels } from './Particle.vue';
import { _$ } from '~/utils/fp';


interface ParticleDrawConfig {
	labelType: {
		count: number
		hasIndicatorChance: number
	}
	blockType: {
		counts: {
			normal: number
			highlight: number
		}
	}
}

function getParticleDrawConfig (config?: ParticleDrawConfig|number|undefined): ParticleDrawConfig {
	if (typeof config !== 'object') {
		const multiplier = config || 1;
		return {
			labelType: {
				count: randomInt(8*multiplier, 10*multiplier),
				hasIndicatorChance: 0.7*multiplier
			},
			blockType: {
				counts: {
					normal: Math.round(5*multiplier),
					highlight: Math.round(1*multiplier)
				}
			}
		}
	} else {
		return config
	}
}

function generateParticleModels (config: ParticleDrawConfig): ParticleModelPositioned[] {
	const models: ParticleModelPositioned[] = []
	for ({} of rangeInt(config.labelType.count)) {
		// @ts-ignore
		models.push({
			position: genRandomStyle(),
			model: {
				type: 'text-label',
				model: {
					html: genRandomText(),
					useIndictor: randomTrue(config.labelType.hasIndicatorChance),
				}
			}
		})
	}
	for ({} of rangeInt(config.blockType.counts.normal)) {
		models.push({
			position: genRandomStyle(),
			model: {
				type: 'block',
				model: {
					color: '#abcdef'
				}
			}
		})
	}
	for ({} of rangeInt(config.blockType.counts.highlight)) {
		models.push({
			position: genRandomStyle(),
			model: {
				type: 'block',
				model: {
					color: '#efabab'
				}
			}
		})
	}
	return models;
}

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

type ParticleModelPositioned = {
	position: StyleValue
	model: ParticleModels
}
const miniElements_Models = ref<ParticleModelPositioned[]>([]);

function update_miniElements () {
	miniElements_Models.value = generateParticleModels(getParticleDrawConfig())
}
onMounted(() => {
	update_miniElements();
})

</script>

<template>
	
	<template v-for="model of miniElements_Models"><Transition name="particle-box" appear><Particle
		class="particle-box"
		:style="model.position"
		v-bind="model.model"
	></Particle></Transition></template>
	
</template>

<style lang="stylus" scoped>

.particle-box {
	position absolute
	opacity 0.5
	z-index -1
}

.particle-box-enter-active,
.particle-box-leave-active {
	transition opacity 300ms ease
}

.particle-box-enter-from,
.particle-box-leave-to {
	opacity 0
}

</style>
