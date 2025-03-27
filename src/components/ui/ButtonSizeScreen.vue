<script setup lang="ts">
import { ref } from 'vue';
import IconMaximize from '../icons/IconMaximize.vue';
import IconMinimize from '../icons/IconMinimize.vue';
import Button from '../Button.vue';

const isFull = ref(false)

const toggleFullScreen = () => {
    if (!isFull.value) {
        document.documentElement.requestFullscreen?.().then(() => {
            isFull.value = true;
        }).catch(err => console.error(err));
    } else {
        document.exitFullscreen?.().then(() => {
            isFull.value = false;
        }).catch(err => console.error(err));
    }
}
</script>

<template>
    <Button variant="icon" title="Full screen" @click="toggleFullScreen">
        <component :is="isFull ? IconMinimize : IconMaximize" :size="18" />
    </Button>
</template>