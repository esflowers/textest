<script setup lang="ts">
    import IconLight from '../icons/IconLight.vue';
    import IconMoon from '../icons/IconMoon.vue';;

    function changeTheme() {
        document.documentElement.classList.toggle('dark');
        const theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light'
        localStorage.setItem('theme', theme)
    }
</script>

<template>
    <button @click="changeTheme" title="Change theme" class="p-1.5 rounded-lg text-zinc-800 bg-transparent transition duration-150 hover:text-black hover:bg-zinc-100 dark:text-zinc-300 dark:hover:text-white dark:hover:bg-zinc-800">
        <span class="flex dark:hidden"><IconMoon :size="22" /></span>
        <span class="hidden dark:block"><IconLight :size="22" /></span>
    </button>
</template>