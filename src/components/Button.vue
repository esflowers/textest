<script setup lang="ts">
interface Props {
    isLink?: boolean,
    text?: string,
    link?: string,
    type?: 'button' | 'submit' | 'reset',
    variant?: 'text' | 'icon' | 'menu',
    isReverse?: boolean,
    target?: 'blank' | 'self' | 'parent' | 'top',
    title?: string,
    disabled?: boolean,
    className?: string
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
    disabled: false,
    className: ''
})

const emit = defineEmits(['click']);
const reverse = props.isReverse ? 'flex-row-reverse' : 'flex-row'
const colorClasses = 'border border-zinc-600 text-zinc-900 bg-transparent transition duration-150 hover:text-zinc-950 hover:border-zinc-950'
const variantPadding: Record<'text' | 'icon' | 'menu', string> = {
    text: `px-2.5 py-[3px]`,
    icon: `p-1`,
    menu: 'p-1.5'
}
const variantClass: Record<'text' | 'icon' | 'menu', string> = {
    text: `text-sm text-nowrap select-none tracking-tight ${colorClasses}`,
    icon: `${colorClasses}`,
    menu: 'transition duration-150 border border-transparent hover:bg-zinc-200'
}
const isDisabled = props.disabled ? 'opacity-45 cursor-not-allowed hover:bg-transparent hover:border-transparent' : `${variantClass[props.variant]}`

const classes = `flex ${reverse} items-center justify-center gap-1 ${isDisabled} ${variantPadding[props.variant]} rounded-full ${props.className} group`
</script>

<template>
    <button v-if="!isLink" :type="type" :title="title" :disabled="disabled"  
        @click="emit('click', $event)" :class="classes">
        <slot />
        {{ text }}
    </button>

    <a v-else :href="link" :target="`_${target}`" :title="title" :class="classes">
        <slot />
        {{ text }}
    </a>
</template>