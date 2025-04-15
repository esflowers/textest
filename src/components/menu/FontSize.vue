<script setup lang="ts">
import { inject, Ref } from 'vue';
import Button from '../Button.vue';
import Dropdown from '../Dropdown.vue';
import InputRange from '../inputs/InputRange.vue';
import IconFontSize from '../icons/IconFontSize.vue';
const fontSize = inject<Ref<number>>('fontSize')!;
</script>

<template>
    <Dropdown top="-top-[52px]">
        <InputRange id="fontSize" v-model="fontSize" :min="12" :max="300" />

        <template #trigger="{ isOpen }">
            <Button variant="menu" title="Font Size" :class="isOpen ? 'text-blue-700' : ''">
                <IconFontSize />
            </Button>
        </template>
    </Dropdown>
</template>