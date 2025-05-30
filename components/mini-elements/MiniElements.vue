<script setup lang="ts">

import TypeA, { type TypeA_Model } from './TypeA.vue';
import TypeB, { type TypeB_Model } from './TypeB.vue';


export type ModelPublic = {
	type: 'a'
	model: TypeA_Model
} | {
	type: 'b'
	model: TypeB_Model
}

defineProps<ModelPublic>()

</script>

<template>
	
	<div>
		<TypeA v-if="type == 'a'" :model="model as TypeA_Model" v-bind="$attrs"></TypeA>
		<TypeB v-if="type == 'b'" :model="model as TypeB_Model" v-bind="$attrs"></TypeB>
	</div>
	
</template>
