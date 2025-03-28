<script setup lang="ts">
import { defineProps } from 'vue';
import type { IconProps } from '../../types';

const props = withDefaults(defineProps<IconProps>(), {
    size: 21,
    strokeWidth: 1.6,
})
</script>

<template>
    <svg  xmlns="http://www.w3.org/2000/svg"  :width="size"  :height="size"  
        viewBox="0 0 24 24"  fill="none"  
        stroke="currentColor"  :stroke-width="strokeWidth"  stroke-linecap="round"  stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 5l6 0" />
        <path d="M7 19l6 0" /><path d="M14 5l-4 14" />
    </svg>
</template>