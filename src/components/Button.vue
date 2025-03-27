<script setup lang="ts">
interface Props {
    isLink: boolean,
    text: string,
    link: string,
    type: 'button' | 'submit' | 'reset',
    variant: 'text' | 'icon' | 'menu',
    isReverse: boolean
    target: 'blank' | 'self' | 'parent' | 'top',
    title: string,
    disabled: boolean
}

const props = withDefaults(defineProps<Props>(), {
    isLink: false,
    text: '',
    link: '#',
    type: 'button',
    variant: 'text',
    isReverse: false,
    target: 'self',
    title: '',
    disabled: false
})

const emit = defineEmits(['click']);
const reverse = props.isReverse ? 'flex-row-reverse' : 'flex-row'
const colorClasses = 'border border-zinc-600 text-zinc-900 bg-transparent transition duration-150 hover:text-zinc-950 hover:border-zinc-950'
const variantClass: Record<'text' | 'icon' | 'menu', string> = {
    text: `px-2.5 py-[3px] text-sm tracking-tight ${colorClasses}`,
    icon: `p-1 ${colorClasses}`,
    menu: ''
}

const classes = `flex ${reverse} items-center justify-center gap-1 ${variantClass[props.variant]} rounded-full`
</script>

<template>
    <button v-if="!isLink" :type="type" :title="title" :disabled="disabled"  
        @click="emit('click', $event)" :class="classes">
        <slot />
        {{ text }}
    </button>

    <a v-else :href="link" :target="target" :title="title" :class="classes">
        <slot />
        {{ text }}
    </a>
</template>