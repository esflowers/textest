<script setup>
  import BtnTheme from './components/buttons/BtnTheme.vue';
  import BtnPrimary from './components/buttons/BtnPrimary.vue';
</script>

<template>
  <div class="flex items-center gap-5">
    <BtnTheme />
    <BtnPrimary text="Copy Tailwind" />
  </div>
  <main class="py-3 w-full h-1/2 flex items-center justify-center font-serif text-9xl text-center italic">
    write here
  </main>
</template>
