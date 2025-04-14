<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)
const toggle = () => (isOpen.value = !isOpen.value)

interface Props {
    top?: string,
    rounded?: string,
    className?: string
}

const props = withDefaults(defineProps<Props>(), {
    top: '-top-16',
    rounded: 'rounded-full',
    className: ''
})

const handleClickOutside = (e: MouseEvent) => {
    if (dropdownRef.value && !dropdownRef.value.contains(e.target as Node)) {
        isOpen.value = false;
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
})
</script>

<template>
    <div ref="dropdownRef" class="relative">
        <transition name="fade">
            <div v-if="isOpen"
                :class="`absolute z-50 ${top} left-1/2 -translate-x-1/2 w-fit h-fit ${className} ${rounded} px-2.5 py-1.5 flex gap-1 backdrop-blur-md bg-white/90 border border-zinc-600`">
                <slot />
            </div>
        </transition>
        <div @click="toggle">
            <slot name="trigger" :is-open="isOpen" />
        </div>
    </div>
</template>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.3s;
    }

    .fade-enter-from, .fade-leave-to {
        opacity: 0;
    }
</style>