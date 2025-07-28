<template>
    <div id="quiz-index-wrapper">
      <span
        v-for="num in 10" :key="num"
        class="quiz-index"
        :class="{ 'current-index': num === currentIndex }"
      >
        {{ num }}
      </span>
    </div>
</template>

<script>
export default {
    name: 'QuizIndexCompo',
    props: {
        currentIndex: {
            type: Number,
            required: true
        }
    },
}
</script>

<style>
#quiz-index-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
}

.quiz-index {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: #6e2323;
}

.quiz-index.current-index {
    background-color: #ffccdb;
    color: black;
}

</style>