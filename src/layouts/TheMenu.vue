<script setup lang="ts">
    import InputSelect from '../components/inputs/InputSelect.vue';
    import InputRange from '../components/inputs/InputRange.vue';
    import InputCheck from '../components/inputs/InputCheck.vue';
    import InputColor from '../components/inputs/InputColor.vue';
    import BtnIcon from '../components/buttons/BtnIcon.vue';
    import IconAlignLeft from '../components/icons/IconAlignLeft.vue';
    import IconAlignCenter from '../components/icons/IconAlignCenter.vue';
    import IconAlignRight from '../components/icons/IconAlignRight.vue';
    import IconAlignJustify from '../components/icons/IconAlignJustify.vue';
    import IconAlignStart from '../components/icons/IconAlignStart.vue';
    import IconAlignEnd from '../components/icons/IconAlignEnd.vue';
</script>

<template>
    <menu class="w-fit h-screen overflow-auto fixed bottom-0 right-0 px-6 py-3 sm:px-8 sm:py-4 md:px-9 xl:px-12 2xl:py-5 flex flex-col gap-5 bg-white dark:bg-zinc-950">
        <div class="col flex flex-col gap-5">
            <InputSelect label="Font family" id="family" form="editText" />
            <InputRange label="Font size" id="size" form="editText" />
            <InputRange label="Font weight" id="weight" form="editText" />
        </div>
        <div class="col flex flex-col gap-5">
            <InputRange label="Letter spacing" id="tracking" unit="em" form="editText" />
            <InputRange label="Line height" id="leading" unit="rem" form="editText" />
            <InputColor label="Text color" id="color" form="editText" />
        </div>
        <div class="col flex flex-col gap-5">
            <InputCheck label="Italic" id="italic" form="editText" />
            <div class="flex flex-col gap-1">
                <p class="select-none text-base">Text align</p>
                <div class="flex items-center justify-start gap-2">
                    <BtnIcon title="Left">
                        <IconAlignLeft :size="20" />
                    </BtnIcon>
                    <BtnIcon title="Center">
                        <IconAlignCenter :size="20" />
                    </BtnIcon>
                    <BtnIcon title="Right">
                        <IconAlignRight :size="20" />
                    </BtnIcon>
                    <BtnIcon title="Justify">
                        <IconAlignJustify :size="20" />
                    </BtnIcon>
                    <BtnIcon title="Start">
                        <IconAlignStart :size="20" />
                    </BtnIcon>
                    <BtnIcon title="End">
                        <IconAlignEnd :size="20" />
                    </BtnIcon>
                </div>
            </div>
            <InputSelect label="Text transform" id="transform" form="editText" />
        </div>
        <div class="col flex flex-col gap-5">
            <InputSelect label="Font variant numeric" id="numeric" form="editText" />
            <InputSelect label="Text decoration" id="decoration" form="editText" />
            <InputSelect label="Text wrap" id="wrap" form="editText" />
        </div>
    </menu>
</template>