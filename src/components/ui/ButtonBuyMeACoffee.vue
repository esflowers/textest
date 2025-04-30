<script setup lang="ts">
import { ref, computed } from 'vue';
import { buyMeACoffee } from '../../utils';
import Button from '../Button.vue';
import IconClose from '../icons/IconClose.vue';

const visible = ref(true)
const position = computed(() => {
    return visible.value ? 'left-16 md:left-1/2 md:-translate-x-1/2 top-4 md:top-5' : 'left-5 bottom-4 opacity-80'
})
</script>

<template>
    <div role="alert" 
        :class="`w-fit h-fit z-50 fixed ${position} rounded-lg flex items-center gap-1.5 backdrop-blur-md bg-white/90 transition duration-150`">
        <a :href="buyMeACoffee" target="_blank">
            <img class="w-24 sm:w-28 lg:w-[115px] 2xl:w-32" src="../../assets/img/bmc-full-logo.svg" alt="Buy Me A Coffee">
        </a>
        <span class="hidden md:flex">
            <Button v-if="visible" variant="menu" title="Close" @click="visible = false" >
                <IconClose :size="16" />
            </Button>
        </span>
    </div>
</template>