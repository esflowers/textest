<script setup lang="ts">
    import { defineProps } from 'vue';

    defineProps({
        size: {
            type: Number,
            default: 24
        },
        stroke: {
            type: Number,
            default: 1.5
        }
    });
</script>

<template>
    <svg  xmlns="http://www.w3.org/2000/svg"  :width="size"  :height="size"  
        viewBox="0 0 24 24"  fill="none"  
        stroke="currentColor"  :stroke-width="stroke"  stroke-linecap="round"  stroke-linejoin="round"  
        class="icon icon-tabler icons-tabler-outline icon-tabler-align-left">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M4 6l16 0" /><path d="M4 12l10 0" /><path d="M4 18l14 0" />
    </svg>
</template>