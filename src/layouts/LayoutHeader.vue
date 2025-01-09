<script setup>
    import IconTextest from '@/components/icons/IconTextest.vue';
    import BtnTheme from '@/components/buttons/BtnTheme.vue';
    import BtnPrimary from '@/components/buttons/BtnPrimary.vue';
</script>

<template>
    <header class="w-full h-fit fixed top-0 left-0 px-6 py-3 sm:px-8 sm:py-4 md:px-9 xl:px-12 2xl:py-5 flex items-center justify-between bg-white dark:bg-zinc-950">
        <a href="/index.html">
            <IconTextest :size="21" />
        </a>
        <div class="flex items-center justify-between gap-3">
            <BtnTheme />
            <BtnPrimary />
        </div>
    </header>
</template>