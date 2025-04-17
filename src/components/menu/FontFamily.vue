<script setup lang="ts">
import { googleFonts } from '../../utils';
import Button from '../Button.vue';
import Dropdown from '../Dropdown.vue';
import InputText from '../inputs/InputText.vue';
import IconTypography from '../icons/IconTypography.vue';
import IconSearch from '../icons/IconSearch.vue';

const props = defineProps<{ modelValue: string }>()
const emit = defineEmits(['update:modelValue'])
</script>

<template>
    <Dropdown top="-top-14" class-name="gap-3">
        <Button variant="text-menu" :is-link="true" :link="googleFonts" class-name="text-xs" target="blank">From Google Fonts</Button>
        <InputText id="searchFont" variant="transparent" placeholder="Font family name"
                :modelValue="modelValue" @update:modelValue="emit('update:modelValue', $event)">
            <IconSearch :size="16" />
        </InputText>

        <template #trigger="{ isOpen }">
            <Button variant="menu" title="Typography" :class="isOpen ? 'text-blue-700' : ''">
                <IconTypography />
            </Button>
        </template>
    </Dropdown>
</template>