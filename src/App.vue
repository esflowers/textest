<script setup lang="ts">
import { ref, onMounted, provide, watch } from 'vue';
import type { TextAlign } from './types';
import { appName } from './utils';
import { Analytics } from '@vercel/analytics/vue';
import TheHeader from './layouts/TheHeader.vue';
import TheMenu from './layouts/TheMenu.vue';
import Toast from './components/Toast.vue';
import Bmc from './components/ui/ButtonBuyMeACoffee.vue';

const font = ref('Geist Mono');
const fontSize = ref(30);
const fontWeight = ref(400);
const textAlign = ref<TextAlign>('center');
provide('fontSize', fontSize);
provide('fontWeight', fontWeight);
provide('textAlign', textAlign);

const loadFont = (fontName: string) => {
  const formattedFont = fontName.replace(/\s+/g, '+')
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = `https://fonts.googleapis.com/css2?family=${formattedFont}:wght@400&display=swap`
  document.head.appendChild(link)
  font.value = fontName
}

onMounted(() => {
  loadFont(font.value)

  const el = document.getElementById('textest')
  if (!el) return;

  el.addEventListener('paste', (e: ClipboardEvent) => {
    e.preventDefault()
    const text = e.clipboardData?.getData('text/plain')
    if (!text) return;
    document.execCommand('insertText', false, text)
  })
})

watch(font, (newFont) => {
  loadFont(newFont)
})
</script>

<template>
  <!-- <Analytics /> -->
  <TheHeader :font='font' />
  <main class="w-full min-h-dvh py-16 responsive-x flex items-center justify-center">
    <h1 id="textest" spellcheck="false" contenteditable="true" 
        class="w-full outline-none"
        :class="{'text-left': textAlign === 'left', 'text-center': textAlign === 'center', 'text-right': textAlign === 'right', 'text-justify': textAlign === 'justify'}"
        :style="{ fontFamily: font, fontSize: fontSize + 'px', fontWeight: fontWeight }">
      {{ appName }}
    </h1>
  </main>
  <Bmc />
  <TheMenu v-model:font="font" />
  <Toast>
    <p>This project is still in content development.</p>
  </Toast>
</template>
