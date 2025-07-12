<script setup lang="ts">
import { inject, Ref } from 'vue';
import Button from '../Button.vue';
import Dropdown from '../Dropdown.vue';
import InputRange from '../inputs/InputRange.vue';
import IconBold from '../icons/IconBold.vue';
const fontWeight = inject<Ref<number>>('fontWeight')!;
</script>

<template>
    <Dropdown top="-top-[52px]">
        <InputRange id="fontWeight" v-model="fontWeight" :min="100" :max="900" unit="" :step="100" />

        <template #trigger="{ isOpen }">
            <Button variant="menu" title="Font Weight" :class="isOpen ? 'text-blue-700' : ''">
                <IconBold />
            </Button>
        </template>
    </Dropdown>
</template>