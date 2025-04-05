<script setup lang="ts">
import { snippets } from '../../utils';
import Button from '../Button.vue';
import Dropdown from '../Dropdown.vue';
import InputSelect from '../inputs/InputSelect.vue';
import IconBlockquote from '../icons/IconBlockquote.vue';
</script>

<template>
    <Dropdown class-name="gap-2">
        <div v-for="snippet in snippets" :key="snippet.name">
            <InputSelect :id="`${snippet.id}`" :default="`${snippet.name}`" :options="snippet.options" />
        </div>

        <template #trigger>
            <Button variant="menu" title="Text Snippets"><IconBlockquote /></Button>
        </template>
    </Dropdown>
</template>