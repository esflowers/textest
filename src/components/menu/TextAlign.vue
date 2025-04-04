<script setup lang="ts">
import { inject, Ref } from 'vue';
import type { TextAlign } from '../../types';
import Button from '../Button.vue';
import Dropdown from '../Dropdown.vue';
import IconAlignCenter from '../icons/IconAlignCenter.vue';
import IconAlignJustify from '../icons/IconAlignJustify.vue';
import IconAlignLeft from '../icons/IconAlignLeft.vue';
import IconAlignRight from '../icons/IconAlignRight.vue';

const textAlign = inject<Ref<TextAlign>>('textAlign')

const setAlign = (align: TextAlign) => {
    if (textAlign) textAlign.value = align;
}

const iconMap = {
    left: IconAlignLeft,
    center: IconAlignCenter,
    right: IconAlignRight,
    justify: IconAlignJustify
}
</script>

<template>
    <Dropdown>
        <Button variant="menu" title="Left" @click="setAlign('left')"><IconAlignLeft /></Button>
        <Button variant="menu" title="Center" @click="setAlign('center')"><IconAlignCenter /></Button>
        <Button variant="menu" title="Right" @click="setAlign('right')"><IconAlignRight /></Button>
        <Button variant="menu" title="Justify" @click="setAlign('justify')"><IconAlignJustify /></Button>

        <template #trigger>
            <Button variant="menu" title="Text Align">
                <component :is="iconMap[textAlign || 'center']" />
            </Button>
        </template>
    </Dropdown>
</template>