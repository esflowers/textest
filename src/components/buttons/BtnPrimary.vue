<script setup lang="ts">
    interface Props {
        type: 'button' | 'submit' | 'reset',
        text: string,
        variable: 'primary' | 'secondary' | 'tertiary',
        size: 'sm' | 'md' | 'lg',
        isLink: boolean,
        link: string,
        target: '_blank' | '_self' | '_parent' | '_top',
        disabled: boolean
    }

    const props = withDefaults(defineProps<Props>(), {
        type: 'button',
        text: 'Click me',
        variable: 'primary',
        size: 'md',
        isLink: false,
        link: '#',
        target: '_blank',
        disabled: false
    })

    const emit = defineEmits(['click']);

    const getStyle = (variable: string, size: string, disabled: boolean): string => {
        const base =  'px-3 py-1 w-fit h-fit rounded-lg flex items-center justify-center gap-1.5 font-semibold transition duration-150';
        const variant: Record<'primary' | 'secondary' | 'tertiary', string> = {
            primary: 'text-zinc-100 bg-zinc-950 hover:text-white hover:bg-black dark:text-zinc-900 dark:bg-zinc-50 dark:hover:text-black dark:hover:bg-white',
            secondary: 'text-zinc-900 bg-transparent border border-zinc-300 hover:text-black hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-50 dark:hover:text-white dark:hover:bg-zinc-900',
            tertiary: 'text-zinc-800 bg-transparent hover:text-black hover:bg-zinc-100 dark:text-zinc-100 dark:hover:text-white dark:hover:bg-zinc-800'
        }
        const sizeClass: Record<'sm' | 'md' | 'lg', string> = {
            sm: 'text-sm',
            md: 'text-base',
            lg: 'text-lg'
        }
        const disabledClass = disabled ? 'opacity-80 cursor-not-allowed' : '';

        return [base, variant[variable], sizeClass[size], disabledClass].join(' ');
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