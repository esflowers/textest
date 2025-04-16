<script setup lang="ts">
import Button from '../Button.vue';
import Dropdown from '../Dropdown.vue'
import IconChevronUp from '../icons/IconChevronUp.vue';

interface Props {
    id: string,
    options: string[],
    default?: string,
}

const props = withDefaults(defineProps<Props>(), {
    default: 'Select'
})

const emit = defineEmits(['click']);
</script>

<template>
    <Dropdown top="-top-36" padding="px-1.5 py-2" class-name="max-h-[120px] flex-col overflow-scroll" rounded="rounded-lg">
        <div v-for="option in options" @click="emit('click', option)" class="block max-w-[30ch] min-h-fit rounded-md font-medium tracking-tighter text-sm truncate cursor-pointer px-1.5 py-[3px] transition duration-150 hover:bg-zinc-200">{{ option }}</div>

        <template #trigger="{ isOpen }">
            <Button variant="text-menu" :class="isOpen ? 'text-blue-700' : ''">
                {{ default }}
                <IconChevronUp :class="`transition ${isOpen ? 'rotate-180' : ''}`" :size="16" />
            </Button>
        </template>
    </Dropdown>
</template>