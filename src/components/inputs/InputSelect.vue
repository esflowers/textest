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
    <div class="flex flex-col gap-1">
        <label :for="id" :form="form" class="select-none text-base">{{ label }}</label>
        <select :id="id" :name="id" :form="form" :disabled="disabled"
                class="py-1 px-2 rounded-lg font-medium text-base text-zinc-900 dark:text-zinc-50 bg-transparent border border-zinc-400 dark:border-zinc-800 focus:outline-none">
            <option value="1" class="font-normal text-sm text-zinc-800 bg-white dark:text-zinc-400 dark:bg-zinc-950" selected>Lora</option>
            <option value="2" class="font-normal text-sm text-zinc-800 bg-white dark:text-zinc-400 dark:bg-zinc-950">Poppins</option>
            <option value="3" class="font-normal text-sm text-zinc-800 bg-white dark:text-zinc-400 dark:bg-zinc-950">Geist</option>
            <option value="4" class="font-normal text-sm text-zinc-800 bg-white dark:text-zinc-400 dark:bg-zinc-950">Montserrat</option>
            <option value="5" class="font-normal text-sm text-zinc-800 bg-white dark:text-zinc-400 dark:bg-zinc-950">Onest</option>
        </select>
    </div>
</template>