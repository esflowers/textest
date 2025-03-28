<script setup lang="ts">
import Button from '../components/Button.vue';
import IconAlignCenter from '../components/icons/IconAlignCenter.vue';
import IconFontSize from '../components/icons/IconFontSize.vue';
import IconItalic from '../components/icons/IconItalic.vue';
import IconBold from '../components/icons/IconBold.vue';
import IconTypography from '../components/icons/IconTypography.vue';
import IconBlockquote from '../components/icons/IconBlockquote.vue';
import IconClearFormatting from '../components/icons/IconClearFormatting.vue';
</script>

<template>
    <menu class="w-fit h-fit hidden fixed bottom-6 left-1/2 -translate-x-1/2 rounded-full px-2.5 py-1.5 md:flex gap-1 backdrop-blur-md bg-white/90 border border-zinc-600">
        <Button variant="menu" title="Font Size"><IconFontSize /></Button>
        <Button variant="menu" title="Font Weight"><IconBold /></Button>
        <Button variant="menu" title="Text"><IconBlockquote /></Button>
        <Button variant="menu" title="Font"><IconTypography /></Button>
        <Button variant="menu" title="Font Style"><IconItalic /></Button>
        <Button variant="menu" title="Text Align"><IconAlignCenter /></Button>
        <Button variant="menu" title="Clear Formatting"><IconClearFormatting /></Button>
    </menu>
</template>