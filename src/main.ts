import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const $ = (e: string) => document.querySelector(e);

document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
})