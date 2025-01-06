<script setup lang="ts">
    import { defineProps } from 'vue';

    defineProps({
        text: {
            type: String,
            default: 'Click me'
        },
        isLink: {
            type: Boolean,
            default: false
        },
        link: {
            type: String,
            default: '#'
        },
        target:{
            type: String,
            default: '_blank'
        }
    })
</script>

<template>
    <button v-if="!isLink" class="px-3 py-1 w-fit h-fit rounded-lg flex items-center gap-1 font-semibold text-base text-zinc-100 bg-zinc-950 transition duration-150 hover:text-white hover:bg-zinc-950/85 dark:text-zinc-900 dark:bg-zinc-50 dark:hover:text-black dark:hover:bg-zinc-50/95">
        {{ text }}
    </button>

    <a v-else :href="link" :target="target" class="px-3 py-1 w-fit h-fit rounded-lg flex items-center gap-1 font-semibold text-base text-zinc-100 bg-zinc-950 transition duration-150 hover:text-white hover:bg-zinc-950/85 dark:text-zinc-900 dark:bg-zinc-50 dark:hover:text-black dark:hover:bg-zinc-50/95">
        {{ text }}
    </a>
</template>