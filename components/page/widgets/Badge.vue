<script setup lang="ts">

import { IconFrom, type IconDefinition } from '~/components/utils/icon/I';
import RenderNode from '~/components/utils/RenderNode.vue';
import type { VueNode } from '~/utils/vue';

const props = defineProps<{
	icon?: IconDefinition
	name?: VueNode
	value?: VueNode
}>()

</script>

<template>
	
	<idiv class="tag tag-badge">
		<idiv class="part titles" v-if="icon || name">
			<IconFrom class="icon" v-if="icon" :i="icon" />
			<span v-if="name" class="name">
				<RenderNode :is="name" />
			</span>
		</idiv>
		<idiv class="part values">
			<span v-if="value" class="value">
				<RenderNode :is="value" />
			</span>
			<span v-else class="value unknown">unknown</span>
		</idiv>
	</idiv>
	
</template>

<style lang="less" scoped>

@about-version-tag-bg: #c8d2e0;
@about-version-tag-text: #6f7cb5;
@about-version-tag-title-text: aliceblue;
@about-version-tag-title-bg: #a6b9d3;

.tag.tag-badge {
	
	display: inline-flex;
	
	font-size: 13px;
	border-radius: 6px;
	background-color: @about-version-tag-bg;
	overflow: hidden;
	
	flex-direction: row;
	flex-wrap: nowarp;
	align-items: baseline;
	
	> .part {
		
		padding: 4px 7px;
		border-radius: 6px;
		
		&.titles {
			
			background-color: @about-version-tag-title-bg;
			color: @about-version-tag-title-text;
			
			> .icon {
				
				&:not(:last-child) {
					margin-inline-end: 0.35em;
				}
				
			}
			
		}
		
		&.values {
			
			font-family: monospace;
			font-size: 90%;
			color: @about-version-tag-text;
			
			> .value.unknown {
				font-style: italic;
			}
			
		}
		
	}
	
}

</style>