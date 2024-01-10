<script setup lang="ts">

import { TypeA_Model } from './TypeA.vue';
import { TypeB_Model } from './TypeB.vue';


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
		<MiniElementsTypeA v-if="type == 'a'" :model="model" v-bind="$attrs"></MiniElementsTypeA>
		<MiniElementsTypeB v-if="type == 'b'" :model="model" v-bind="$attrs"></MiniElementsTypeB>
	</div>
	
</template>
