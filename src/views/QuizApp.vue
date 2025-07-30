<template>
  <div id="quiz-app">
    <header id="quiz-header">
      <h1>Quiz App</h1>
      <div class="nav-buttons">
        <button @click="goHome" class="nav-btn">Home</button>
        <button @click="goProfile" class="nav-btn">Profile</button>
      </div>
      <div id="avatar-container">
        <img src="@/assets/Avatar.svg" alt="Avatar" id="avatar" />
      </div>
    </header>

    <div id="quiz-banner">
      <h2>Test Your Knowledge</h2>
      <p>Select a category and difficulty to start</p>
    </div>

    <main id="quiz-main">
      <div class="selection-section">
        <h3>Category</h3>
        <select v-model="selectedCategory" class="quiz-select">
          <option value="">Select a category</option>
          <option v-for="category in categories" :key="category.id" :value="category.id">
            {{ category.name }}
          </option>
        </select>
      </div>

      <div class="selection-section">
        <h3>Difficulty</h3>
        <div class="difficulty-buttons">
          <button 
            v-for="difficulty in difficulties" 
            :key="difficulty"
            @click="selectedDifficulty = difficulty"
            :class="{ active: selectedDifficulty === difficulty }"
            class="difficulty-btn"
          >
            {{ difficulty.charAt(0).toUpperCase() + difficulty.slice(1) }}
          </button>
        </div>
      </div>

      <div class="start-section">
        <button 
          @click="startQuiz" 
          :disabled="!selectedCategory || !selectedDifficulty"
          class="start-btn"
        >
          Start Quiz
        </button>
        
        <div class="additional-actions">
          <button @click="viewResults" class="secondary-btn">View Results</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { quizCategories } from '@/constants/QuizCategories.js'

export default {
  name: 'QuizApp',
  data() {
    return {
      categories: quizCategories,
      difficulties: ['easy', 'medium', 'hard'],
      selectedCategory: '',
      selectedDifficulty: ''
    }
  },
  methods: {
    startQuiz() {
      if (this.selectedCategory && this.selectedDifficulty) {
        this.$router.push({
          name: 'quiz',
          query: {
            category: this.selectedCategory,
            difficulty: this.selectedDifficulty,
            index: 1
          }
        })
      }
    },
    goHome() {
      this.$router.push({ name: 'home' })
    },
    goProfile() {
      this.$router.push({ name: 'ProfilePage' })
    },
    viewResults() {
      this.$router.push({ name: 'result' })
    }
  }
}
</script>

<style scoped>
#quiz-app {
  background-color: rgb(73, 3, 81);
  min-height: 100vh;
  color: white;
}

#quiz-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  background-color: rgb(82, 33, 88);
}

.nav-buttons {
  display: flex;
  gap: 10px;
}

.nav-btn {
  padding: 8px 16px;
  background-color: transparent;
  color: white;
  border: 1px solid #ffccdb;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.nav-btn:hover {
  background-color: #ffccdb;
  color: #6e2323;
}

#quiz-header h1 {
  margin: 0;
  font-size: 2rem;
}

#avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

#quiz-banner {
  background-color: #ffccdb;
  padding: 40px 30px;
  margin: 20px;
  text-align: center;
  color: #6e2323;
  border-radius: 8px;
}

#quiz-banner h2 {
  margin: 0 0 10px 0;
  font-size: 2.5rem;
}

#quiz-banner p {
  margin: 0;
  font-size: 1.2rem;
}

#quiz-main {
  padding: 30px;
  max-width: 600px;
  margin: 0 auto;
}

.selection-section {
  margin-bottom: 30px;
}

.selection-section h3 {
  color: #ffccdb;
  margin-bottom: 15px;
  font-size: 1.3rem;
}

.quiz-select {
  width: 100%;
  padding: 12px 15px;
  font-size: 1rem;
  border: 2px solid #ffccdb;
  border-radius: 6px;
  background-color: white;
  color: #6e2323;
}

.quiz-select:focus {
  outline: none;
  border-color: rgb(82, 33, 88);
}

.difficulty-buttons {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.difficulty-btn {
  padding: 12px 24px;
  border: 2px solid #ffccdb;
  background-color: transparent;
  color: #ffccdb;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.difficulty-btn:hover {
  background-color: #ffccdb;
  color: #6e2323;
}

.difficulty-btn.active {
  background-color: #ffccdb;
  color: #6e2323;
}

.start-section {
  text-align: center;
  margin-top: 40px;
}

.start-btn {
  padding: 15px 40px;
  font-size: 1.2rem;
  background-color: #ffccdb;
  color: #6e2323;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.start-btn:hover:not(:disabled) {
  background-color: rgb(82, 33, 88);
  color: white;
  transform: translateY(-2px);
}

.start-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.additional-actions {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 20px;
}

.secondary-btn {
  padding: 10px 20px;
  background-color: transparent;
  color: #ffccdb;
  border: 2px solid #ffccdb;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.secondary-btn:hover {
  background-color: #ffccdb;
  color: #6e2323;
}
</style>