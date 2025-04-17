<script setup lang="ts">
import { ref, watch } from 'vue';

interface Props {
    id: string,
    placeholder?: string,
    variant?: 'border' | 'transparent',
    disabled?: boolean,
    modelValue?: string,
    spell?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    placeholder: '',
    variant: 'border',
    disabled: false,
    modelValue: '',
    spell: false
})

const emit = defineEmits(['update:modelValue'])
const inputValue = ref(props.modelValue)

watch(() => props.modelValue, (newVal) => {
    inputValue.value = newVal
})

const onInput = (e: Event) => {
    const target = e.target as HTMLInputElement
    emit('update:modelValue', target.value)
}

const variantInput = props.variant === 'border' ? 'px-0.5 bg-transparent border-b border-zinc-800 focus:border-zinc-950' : 'pl-1.5 pr-0.5 rounded-full has-[input:focus]:bg-zinc-200'
const classes = `py-0.5 flex items-center gap-1.5 transition duration-150 ${variantInput} ${props.disabled ? 'cursor-not-allowed opacity-60' : ''}`
const classesInput = `max-w-[15ch] font-medium tracking-tighter text-zinc-800 text-sm bg-transparent focus:text-zinc-950 focus:outline-none placeholder:text-zinc-600 ${props.disabled ? 'cursor-not-allowed' : ''}`
</script>

<template>
    <div :class="classes">
        <slot />
        <input type="text" :class="classesInput" 
                :id="id" :name="id" 
                :placeholder="placeholder" :value="inputValue"
                @input="onInput" :spellcheck="spell"
                :disabled="disabled">
    </div>
</template>

<style scoped>
    ::selection {
        @apply text-zinc-950 bg-blue-300/60;
    }
</style>