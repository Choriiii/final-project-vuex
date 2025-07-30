<template>
  <div class="result-page-container">
    <div class="result-card">
      <h1>Result</h1>
      <div class="score">
        <p>Your score is <span>{{ quizStore.score }}</span></p>
      </div>
      <div class="result-actions">
        <button class="btn" @click="goToCategories">Choose Category</button>
        <button class="btn" @click="goHome">Home</button>
      </div>
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
    },
    methods: {
      goToCategories() {
        this.quizStore.$reset()
        this.$router.push('/quiz')
      },
      goHome() {
        this.quizStore.$reset()
        this.$router.push('/')
      }
    }
  }
</script>

<style>
.result-page-container {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 80vh;
  color: white;
  gap: 30px;
}

.result-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 320px;
  max-width: 90vw;
  background: rgba(255,255,255,0.13);
  box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
  border-radius: 24px;
  padding: 48px 32px;
  color: #fff;
}

.result-card h1 {
  font-size: 2.5rem;
  margin-bottom: 24px;
  letter-spacing: 2px;
}

.score p {
  font-size: 1.3rem;
  margin-bottom: 32px;
}

.score span {
  font-weight: bold;
  font-size: 2rem;
  color: #ffd700;
}

.result-actions {
  display: flex;
  gap: 20px;
}

.btn {
  background: #ffccdb;
  color: rgb(79, 77, 77);
  padding: 12px 28px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  box-shadow: 0 2px 8px rgba(31,38,135,0.15);
  transition: background 0.2s, color 0.2s;
}

.btn:hover {
  background: #FDB94B;
  color: rgb(79, 77, 77);
}

</style>