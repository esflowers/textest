<script setup>
import IconTextest from '@/components/icons/IconTextest.vue';
import IconGitHub from '@/components/icons/IconGitHub.vue';
import Button from '@/components/Button.vue';
import ButtonSizeScreen from '@/components/ui/ButtonSizeScreen.vue';
import { repository, site } from '../utils';
</script>

<template>
    <header class="w-full h-14 fixed top-0 left-0 responsive-x flex items-center justify-between backdrop-blur-md bg-white/90">
        <a :href="site"><IconTextest /></a>
        <div class="hidden md:flex items-center justify-between gap-3">
            <span class="mr-3 text-sm tracking-tight">Geist Mono</span>
            <ButtonSizeScreen />
            <Button :isLink="true" :link="repository" target="blank" variant="icon" title="GitHub" >
                <IconGitHub :size="18" />
            </Button>
        </div>
        <span class="md:hidden text-xs text-end">
            Only medium or large devices
        </span>
    </header>
</template>