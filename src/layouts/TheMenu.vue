<script setup lang="ts">

</script>

<template>
    <menu class="w-full h-fit fixed bottom-0 left-0 px-6 py-3 sm:px-8 sm:py-4 md:px-9 xl:px-12 2xl:py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8 2xl:gap-4 bg-white dark:bg-zinc-950">
        <div class="col flex flex-col gap-3">
            <p>Font family</p>
            <select name="fam" id="fam" class="bg-transparent p-1 px-3 rounded-lg border border-zinc-300 dark:border-zinc-800">
                <option value="1">Geist</option>
            </select>
            <label for="customRange" class="form-label">Font size</label>
            <input type="range" class="accent-black dark:accent-white h-3" id="customRange" >
            <p>Font weight</p>
        </div>
        <div class="col flex flex-col gap-3">
            <p>Font style</p>
            <p>Letter spacing</p>
        </div>
        <div class="col flex flex-col gap-3">
            <p>Font variant numeric</p>

        </div>
    </menu>
</template>