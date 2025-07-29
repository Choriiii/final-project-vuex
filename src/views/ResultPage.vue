<template>
  <div class="result-page-container">
    <h1>Results</h1>
    
    <div v-if="quizStore.quizAnswers.length === 10">
      <p>Quiz completed!</p>
      <p>Your score is {{ quizStore.score }}/10</p>
    </div>
    
    <div v-else-if="quizStore.quizAnswers.length > 0 && quizStore.quizAnswers.length < 10">
      <p>Quiz in progress...</p>
      <p>You have answered {{ quizStore.quizAnswers.length }}/10 questions.</p>
      <p>Complete the quiz to see your final results!</p>
    </div>
    
    <div v-else>
      <p>No quiz results available yet.</p>
      <p>Take a quiz first to see your results!</p>
      <button @click="goToQuizApp" class="quiz-btn">Take Quiz</button>
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
    methods: {
      goToQuizApp() {
        this.$router.push({ name: 'app' })
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
    background-color: rgb(73, 3, 81);
}

.quiz-btn {
  padding: 12px 24px;
  background-color: #ffccdb;
  color: #6e2323;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 20px;
  transition: all 0.3s ease;
}

.quiz-btn:hover {
  background-color: rgb(82, 33, 88);
  color: white;
  transform: translateY(-2px);
}
</style>