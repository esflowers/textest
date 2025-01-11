<script setup lang="ts">
    import { defineProps } from 'vue';

    defineProps({
        size: {
            type: Number,
            default: 16
        }
    });
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size - 1" 
        viewBox="0 0 4.233 3.969">
        <path fill="currentColor" d="M10.216 6.836c-.307 0-.534-.08-.68-.238-.142-.158-.213-.407-.213-.745v-3.25h.738v3.173c0 .158.03.27.092.334.061.06.157.09.288.09h.339v.636ZM8.838 3.96v-.406h1.942v.406z" aria-label="t" font-family="Geist" font-size="6.424" font-weight="600" letter-spacing="-.002" style="-inkscape-font-specification:'Geist, Semi-Bold'" transform="matrix(.96971 0 0 .9375 -8.57 -2.44)" word-spacing="0"/>
        <path fill="currentColor" d="M12.528 2.603H12.2c-.127.617-.352.952-.912.952l-.04.405h.478c-.075.715-.3 1.473-.312 1.93-.006.489.115.946.693.946.41 0 .75-.258.999-.766l-.248-.174c-.185.373-.434.419-.526.419-.254 0-.277-.277-.277-.47 0-.386.26-1.235.33-1.884h.791l.029-.406h-.785z" aria-label="t" font-family="Lora" font-size="6.424" font-style="italic" font-weight="600" letter-spacing="-.002" style="-inkscape-font-specification:'Lora, Semi-Bold Italic'" transform="matrix(.96971 0 0 .9375 -8.57 -2.44)" word-spacing="0"/>
    </svg>
</template>