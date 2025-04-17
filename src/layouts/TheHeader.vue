<script setup lang="ts">
import IconTextest from '../components/icons/IconTextest.vue';
import IconGitHub from '../components/icons/IconGitHub.vue';
import Button from '../components/Button.vue';
import ButtonSizeScreen from '../components/ui/ButtonSizeScreen.vue';
import { repository, site } from '../utils';

interface Props {
    font?: string,
}

const props = withDefaults(defineProps<Props>(), {
    font: 'Geist Mono'
})
</script>

<template>
    <header class="w-full h-14 fixed top-0 left-0 responsive-x flex items-center justify-between backdrop-blur-md bg-white/90">
        <a :href="site"><IconTextest /></a>
        <span class="ml-auto lg:mr-6 text-sm text-end capitalize tracking-tight select-all">{{ font }}</span>
        <div class="hidden lg:flex items-center justify-between gap-3">
            <ButtonSizeScreen />
            <Button :isLink="true" :link="repository" target="blank" variant="icon" title="GitHub" >
                <IconGitHub :size="18" />
            </Button>
        </div>
    </header>
</template>