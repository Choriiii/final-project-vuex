<template>
  <div class="result-page-container">
    <h1>Result</h1>
    <div>
        <p>Your score is {{ quizStore.score }}</p>
    </div>
  </div>
</template>

<script>
import { useQuizStore } from '@/store/QuizStore.js'

export default {
    computed: {
        quizStore() {
          return useQuizStore()
        }
    },
    mounted () {
      const answerLength = this.quizStore.quizAnswers.length
      if ( answerLength == 0 ) {
        this.$router.push('/') // move to category choice page
      } else if ( answerLength < 10 ) {
        this.$router.push({
          name: 'quiz',
          query: {
            category: this.quizStore.currentCategory,
            difficulty: this.quizStore.currentDifficulty,
            index: this.quizStore.currentIndex,
          }
        })
      }
    }
  }
</script>

<style>
.result-page-container {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    padding: 5vh 20vw;
    color: white;
    gap: 30px;
}

</style>