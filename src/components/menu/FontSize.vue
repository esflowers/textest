<script setup lang="ts">
import { inject, Ref } from 'vue';
import Button from '../Button.vue';
import Dropdown from '../Dropdown.vue';
import InputRange from '../inputs/InputRange.vue';
import IconFontSize from '../icons/IconFontSize.vue';
const fontSize = inject<Ref<number>>('fontSize')!;
</script>

<template>
    <Dropdown position="-top-14 left-1/2 -translate-x-1/2">
        <InputRange id="fontSize" v-model="fontSize" :min="12" :max="128" />

        <template #trigger>
            <Button variant="menu" title="Font Size">
                <IconFontSize />
            </Button>
        </template>
    </Dropdown>
</template>