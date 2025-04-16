<script setup lang="ts">
import { snippets } from '../../utils';
import Button from '../Button.vue';
import Dropdown from '../Dropdown.vue';
import InputSelect from '../inputs/InputSelect.vue';
import IconBlockquote from '../icons/IconBlockquote.vue';

const handleInsertText = (text: string) => {
    const el = document.getElementById('textest')
    if (!el) return
    el.focus()

    const selection = window.getSelection()
    if (!selection) return

    const range = document.createRange()
    range.selectNodeContents(el)
    range.collapse(false)

    const textNode = document.createTextNode(text)
    range.insertNode(textNode)
    range.setStartAfter(textNode)
    range.setEndAfter(textNode)
    selection.removeAllRanges()
    selection.addRange(range)
}
</script>

<template>
    <Dropdown top="-top-[58px]">
        <div v-for="snippet in snippets" :key="snippet.name">
            <InputSelect :id="`${snippet.id}`" :default="`${snippet.name}`" 
                        :options="snippet.options" @click="handleInsertText" />
        </div>

        <template #trigger="{ isOpen }">
            <Button variant="menu" title="Text Snippets" :class="isOpen ? 'text-blue-700' : ''">
                <IconBlockquote />
            </Button>
        </template>
    </Dropdown>
</template>