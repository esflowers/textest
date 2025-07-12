<script setup lang="ts">
import Button from '../components/Button.vue';
import FontSize from '../components/menu/FontSize.vue';
import FontWeight from '../components/menu/FontWeight.vue';
import TextSnippets from '../components/menu/TextSnippets.vue';
import FontFamily from '../components/menu/FontFamily.vue';
import TextAlign from '../components/menu/TextAlign.vue';
import IconItalic from '../components/icons/IconItalic.vue';
import IconClearFormatting from '../components/icons/IconClearFormatting.vue';

const props = defineProps<{ font: string }>()
const emit = defineEmits(['update:font'])
</script>

<template>
    <menu class="w-fit h-fit fixed bottom-3.5 left-1/2 -translate-x-1/2 rounded-full px-2.5 py-1.5 flex gap-1 backdrop-blur-md bg-white/90 border border-zinc-800">
        <FontSize />
        <FontWeight />
        <TextSnippets />
        <FontFamily :modelValue="font" @update:modelValue="val => emit('update:font', val)" />
        <Button variant="menu" title="Font Style" :disabled="true"><IconItalic /></Button>
        <TextAlign />
        <Button variant="menu" title="Clear Formatting" :disabled="true"><IconClearFormatting /></Button>
    </menu>
</template>