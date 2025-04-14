<script setup lang="ts">
import Button from '../components/Button.vue';
import FontSize from '../components/menu/FontSize.vue';
import TextSnippets from '../components/menu/TextSnippets.vue';
import TextAlign from '../components/menu/TextAlign.vue';
import IconItalic from '../components/icons/IconItalic.vue';
import IconBold from '../components/icons/IconBold.vue';
import IconTypography from '../components/icons/IconTypography.vue';
import IconClearFormatting from '../components/icons/IconClearFormatting.vue';
</script>

<template>
    <menu class="w-fit h-fit fixed bottom-3.5 left-1/2 -translate-x-1/2 rounded-full px-2.5 py-1.5 flex gap-1 backdrop-blur-md bg-white/90 border border-zinc-800">
        <FontSize />
        <Button variant="menu" title="Font Weight" :disabled="true"><IconBold /></Button>
        <TextSnippets />
        <Button variant="menu" title="Font" :disabled="true"><IconTypography /></Button>
        <Button variant="menu" title="Font Style" :disabled="true"><IconItalic /></Button>
        <TextAlign />
        <Button variant="menu" title="Clear Formatting" :disabled="true"><IconClearFormatting /></Button>
    </menu>
</template>