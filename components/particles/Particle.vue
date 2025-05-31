<script setup lang="ts">

import TypeA, { type P_TextLabel_Model } from './PTextLabel.vue';
import TypeB, { type P_Block_Model } from './PBlock.vue';


export type ParticleModels = {
	type: 'text-label'
	model: P_TextLabel_Model
} | {
	type: 'block'
	model: P_Block_Model
}

defineProps<ParticleModels>()

</script>

<template>
	
	<div>
		<TypeA v-if="type == 'text-label'" :model="model as P_TextLabel_Model" v-bind="$attrs"></TypeA>
		<TypeB v-if="type == 'block'" :model="model as P_Block_Model" v-bind="$attrs"></TypeB>
	</div>
	
</template>
