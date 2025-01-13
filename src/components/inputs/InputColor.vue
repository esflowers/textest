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
        <label :for="id" :form="form" class="select-none text-base">
            {{ label }}
        </label>
        <div class="flex items-center gap-2">
            <input type="color" class="appearance-none w-10 h-8 p-0 border-none bg-transparent" 
                :id="id" :name="id" 
                :form="form" :disabled="disabled" />
            <p><small class="font-medium text-sm">#000000</small></p>
        </div>
    </div>
</template>