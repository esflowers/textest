<script setup lang="ts">

</script>

<template>
    <menu class="w-full h-fit fixed bottom-0 left-0 px-6 py-3 sm:px-8 sm:py-4 md:px-9 xl:px-12 2xl:py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 2xl:gap-4 bg-white dark:bg-zinc-950">
        <div class="col flex flex-col gap-1.5">
            Font Size

            <progress max="100" value="80"></progress>
        </div>
        <div class="col flex flex-col gap-1.5">
            Color
        </div>
        <div class="col flex flex-col gap-1.5">
            Líneas base
        </div>
    </menu>
</template>