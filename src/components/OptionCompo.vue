<template>
    <div id="options-wrapper">
        <div class="option-item" v-for="(option, index) in options" :key="index" @click="selectOption(option)">
            <p>{{ option }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OptionCompo',
    props: {
        options: {
            type: Array,
            required: true
        }
    },
    methods: {
        selectOption(option) {
            console.log('Selected option:', option);
            this.$emit('option-selected', option);
        }
    },
}
</script>

<style>
#options-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;                   /* 行の高さは内容に合わせる */
    gap: 16px;           
    width: 100%;
    height: 30vh;
    overflow-y: auto;
}

.option-item {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    padding: 20px;
    font-size: 1.2em;
    cursor: pointer;
    border: 1px solid #ccc;
    text-align: center;
}
</style>