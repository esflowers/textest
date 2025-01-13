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
    <label :for="id" :form="form" class="flex items-center gap-2 select-none text-base">
        <input type="checkbox" :name="id" :id="id" :form="form" :disabled="disabled"
            class="w-4 h-4 accent-zinc-900 dark:accent-zinc-200">
        {{ label }}
    </label>
</template>