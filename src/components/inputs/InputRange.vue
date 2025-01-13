<script setup lang="ts">
    import { defineProps } from 'vue';

    defineProps({
        label: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: true
        },
        unit: {
            type: String,
            default: 'px'
        },
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 100
        },
        step: {
            type: Number,
            default: 1
        },
        form: {
            type: String,
            required: true
        },
        disabled: {
            type: Boolean,
            default: false
        }
    })
</script>

<template>
    <div class="flex flex-col gap-1">
        <div class="flex flex-wrap items-center justify-between gap-4">
            <label :for="id" :form="form" class="select-none text-base">
                {{ label }}
            </label>
            <p><small class="text-xs font-medium">500 {{ unit }}</small></p>
        </div>
        <input type="range" class="h-1.5 accent-zinc-900 dark:accent-zinc-50 appearance-none rounded-md bg-zinc-300 dark:bg-zinc-900 focus:outline-none" 
                :id="id" :name="id" 
                :min="min" :max="max" :step="step"
                :form="form" :disabled="disabled">
    </div>
</template>