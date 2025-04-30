<script setup lang="ts">
import { ref } from 'vue';
import Button from './Button.vue';
import IconClose from './icons/IconClose.vue';

const visible = ref(true)
</script>

<template>
    <div v-if="visible" role="alert" 
        class="w-[30ch] h-fit z-50 fixed bottom-3.5 right-3.5 rounded-lg px-2.5 py-1.5 font-medium text-sm tracking-tight flex items-center gap-2.5 backdrop-blur-md bg-white/90 border border-dashed border-zinc-800">
        <slot />
        <Button variant="menu" title="Close" @click="visible = false" >
            <IconClose :size="16" />
        </Button>
    </div>
</template>