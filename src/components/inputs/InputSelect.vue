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
</script>

<template>
    <Dropdown position="-top-36 left-1/2 -translate-x-1/2" class-name="flex-col" rounded="rounded-lg">
        <p v-for="option in options" class="block w-[30ch] rounded-md font-medium tracking-tighter text-sm truncate cursor-pointer px-1 py-0.5 transition duration-150 hover:bg-zinc-300">{{ option }}</p>

        <template #trigger>
            <Button>
                {{ default }}
                <IconChevronUp />
            </Button>
        </template>
    </Dropdown>
</template>