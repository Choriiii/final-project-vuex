<template>
    <div id="options-wrapper">
        <div class="option-item" :class="{ active: isActive(option) }" v-for="(option, index) in options" :key="index" @click="selectOption(option)">
            <p>{{ option }}</p>
        </div>
    </div>
</template>

<script>
import { useQuizStore } from '@/store/QuizStore.js'

export default {
    name: 'OptionCompo',
    props: {
        options: {
            type: Array,
            required: true
        }
    },
    computed: {
        quizStore() {
            return useQuizStore()
        },
        currentIndex() {
            return this.quizStore.currentIndex
        }
    },
    methods: {
        selectOption(option) {
            this.$emit('option-selected', option);
        },
        isActive(option) {
            const answerObj = this.quizStore.quizAnswers[this.currentIndex - 1];
            return answerObj && answerObj.answer === option;
        }
    },
}
</script>

<style>
#options-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
    gap: 1rem;           
    width: 100%;
    height: 30vh;
    overflow-y: auto;
}

@media (max-width: 800px) {
    #options-wrapper {
        display: flex;
        flex-direction: column;
    }
}

.option-item {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    padding: 1rem;
    font-size: 1.2em;
    cursor: pointer;
    text-align: center;
    color: #fff;
    background: linear-gradient(135deg, #71309c 0%, #6a11cb 100%);
    box-shadow:
        0 10px 20px rgba(0, 0, 0, 0.1),
        0 4px 6px rgba(0, 0, 0, 0.06);
    transition: box-shadow 0.18s, transform 0.18s, background 0.18s;
    will-change: transform, box-shadow;
}

.option-item:hover {
    background: linear-gradient(135deg, #4b2067 0%, #71309c 100%);
    color: #ffd700;
    box-shadow:
        0 2px 4px rgba(0, 0, 0, 0.10),
        0 1px 4px rgba(113,48,156,0.10);
    transform: translateY(4px) scale(0.97); /* hoverで沈む */
}

.option-item:active,
.option-item.active {
    color: #ffd700;
    border: 2.5px solid #ffd700; /* active時に黄色い枠線 */
}

</style>