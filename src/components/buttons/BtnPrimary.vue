<script setup lang="ts">
    import { defineProps, defineEmits } from 'vue';

    defineProps({
        type: {
            type: String,
            default: 'button'
        },
        text: {
            type: String,
            default: 'Click me'
        },
        variable: {
            type: String,
            default: 'primary'
        },
        size: {
            type: String,
            default: 'md'
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

    const getStyle = (variable, size, disabled) => {
        const base =  'px-3 py-1 w-fit h-fit rounded-lg flex items-center justify-center gap-1.5 font-semibold transition duration-150';
        const variant = {
            primary: 'text-zinc-100 bg-zinc-950 hover:text-white hover:bg-black dark:text-zinc-900 dark:bg-zinc-50 dark:hover:text-black dark:hover:bg-white',
            secondary: 'text-zinc-900 bg-transparent border border-zinc-200 hover:text-black hover:bg-zinc-200 dark:border-zinc-700 dark:text-zinc-50 dark:hover:text-white dark:hover:bg-zinc-700',
            tertiary: 'text-zinc-800 bg-transparent hover:text-black hover:bg-zinc-100 dark:text-zinc-100 dark:hover:text-white dark:hover:bg-zinc-800'
        }
        const sizeClass = {
            sm: 'text-sm',
            md: 'text-base',
            lg: 'text-lg'
        }
        const disabledClass = disabled ? 'opacity-80 cursor-not-allowed' : '';

        return [
            base,
            variant[variable] || '',
            sizeClass[size] || '',
            disabledClass
        ].join(' ');
    }
</script>

<template>
    <button v-if="!isLink" :type="type" :disabled="disabled"  @click="emit('click', $event)"
        :class="getStyle(variable, size, disabled)">
        <slot name="left" />
        {{ text }}
        <slot name="right" />
    </button>

    <a v-else :href="link" :target="target" :disabled="disabled"
        :class="getStyle(variable, size, disabled)">
        <slot name="left" />
        {{ text }}
        <slot name="right" />
    </a>
</template>