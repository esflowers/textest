<script setup>
    import IconTextest from '@/components/icons/IconTextest.vue';
    import IconCode from '@/components/icons/IconCode.vue';
    import IconMaximize from '@/components/icons/IconMaximize.vue';
    import BtnTheme from '@/components/buttons/BtnTheme.vue';
    import BtnPrimary from '@/components/buttons/BtnPrimary.vue';
    import BtnIcon from '@/components/buttons/BtnIcon.vue';
</script>

<template>
    <header class="w-full h-fit fixed top-0 left-0 px-6 py-3 sm:px-8 sm:py-4 md:px-9 xl:px-12 2xl:py-5 flex items-center justify-between bg-white dark:bg-zinc-950">
        <a href="/index.html" class="text-black dark:text-white">
            <IconTextest :size="22" />
        </a>
        <div class="flex items-center justify-between gap-3">
            <div class="flex items-center justify-center gap-1.5">
                <BtnTheme />
                <span class="hidden lg:flex">
                    <BtnIcon title="Fullscreen" >
                        <IconMaximize :size="22" />
                    </BtnIcon>
                </span>
                <span class="hidden md:flex">
                    <BtnIcon title="Code" >
                        <IconCode :size="22" />
                    </BtnIcon>
                </span>
            </div>
            <BtnPrimary text="Copy CSS" variable="secondary" />
            <BtnPrimary text="Copy Tailwind" variable="primary" />
        </div>
    </header>
</template>