<script setup lang="ts">
    import { defineProps, defineEmits } from 'vue';

    defineProps({
        title: {
            type: String,
            default: 'Button'
        },
        type: {
            type: String,
            default: 'button'
        },
        isLink: {
            type: Boolean,
            default: false
        },
        link: {
            type: String,
            default: '#'
        },
        target: {
            type: String,
            default: '_blank'
        },
        disabled: {
            type: Boolean,
            default: false
        }
    })

    const emit = defineEmits(['click']);
</script>

<template>
    <button v-if="!isLink" :type="type" :title="title" :disabled="disabled"  @click="emit('click', $event)"
        class="p-1.5 rounded-lg text-zinc-800 bg-transparent transition duration-150 hover:text-black hover:bg-zinc-100 dark:text-zinc-300 dark:hover:text-white dark:hover:bg-zinc-800">
        <slot />
    </button>

    <a v-else :href="link" :title="title" :target="target" :disabled="disabled"
        class="p-1.5 rounded-lg text-zinc-800 bg-transparent transition duration-150 hover:text-black hover:bg-zinc-100 dark:text-zinc-300 dark:hover:text-white dark:hover:bg-zinc-800">
        <slot />
    </a>
</template>