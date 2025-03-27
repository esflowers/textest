<script setup>
    import IconTextest from '@/components/icons/IconTextest.vue';
    import IconCode from '@/components/icons/IconCode.vue';
    import IconMaximize from '@/components/icons/IconMaximize.vue';
    import BtnPrimary from '@/components/buttons/BtnPrimary.vue';
    import BtnIcon from '@/components/buttons/BtnIcon.vue';
</script>

<template>
    <header class="w-full h-14 sm:h-16 fixed top-0 left-0 px-6 sm:px-8 md:px-9 xl:px-12 flex items-center justify-between border-b border-zinc-300 bg-white dark:bg-zinc-950 dark:border-zinc-900">
        <a href="/index.html" class="text-black dark:text-white">
            <IconTextest :size="22" />
        </a>
        <div class="flex items-center justify-between gap-3">
            <div class="flex items-center justify-center gap-1.5">
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