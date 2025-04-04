<script setup lang="ts">
interface Props {
    id: string,
    unit?: string,
    min?: number,
    max?: number,
    step?: number,
    disabled?: boolean,
    modelValue: number
}

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

const props = withDefaults(defineProps<Props>(), {
    unit: 'px',
    min: 0,
    max: 100,
    step: 1,
    disabled: false
})
</script>

<template>
    <div class="flex items-center gap-3 text-nowrap">
        <input type="range" class="h-[3px] accent-zinc-950 appearance-none rounded-md bg-zinc-600 focus:outline-none" 
                :id="id" :name="id"
                :value="modelValue" @input="emit('update:modelValue', +(($event.target as HTMLInputElement).value))"
                :min="min" :max="max" :step="step" :disabled="disabled">
        <span><small class="font-semibold tracking-tight text-xs">{{ modelValue }} {{ unit }}</small></span>
    </div>
</template>