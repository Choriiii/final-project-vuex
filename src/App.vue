<template>
<div id="body">
    <header>
      <router-link to="/" class="profile-link">
        <h1>Quiz App</h1>
      </router-link>
      <div id="right-container">
        <router-link
          v-if="showUncompleteQuiz"
          :to="{ name: 'quiz', query: { index: quizStore.currentIndex } }"
          id="resume-quiz-link"
        >
          Back to Quiz
        </router-link>
        <router-link to="/ProfilePage" class="profile-link">
          <img src="@/assets/Avatar.svg" alt="Avatar" id="avatar" />
        </router-link>
      </div>
    </header>

    <router-view />
  </div>
  
</template>

<script>
import { useUserStore } from '@/store/userStore'
import { useQuizStore } from '@/store/QuizStore'

export default {
  name:"App",
  computed: {
    userStore() {
      return useUserStore()
    },
    quizStore() {
      return useQuizStore()
    },
    showUncompleteQuiz() {
      if (this.$route.path === '/quiz') return false
      if (!this.userStore.isLogin) return false
      return this.quizStore.isUncomplete
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#body{
  width: 100%;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  background-color: rgb(82, 33, 88);
  margin-bottom: 25px;
  border-radius: 10px;
}

header h1 {
    font-size: 30px;
    color: white;
}

#right-container {
  display: flex;
  align-items: center;
  gap: 20px
  
}

#resume-quiz-link {
  background: #FDB94B;
  color: rgb(79, 77, 77);
  padding: 10px 15px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 0.85rem;
  box-shadow: 0 2px 8px rgba(31,38,135,0.15);
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  height: fit-content;
}

#resume-quiz-link:hover {
  background-color: #ffccdb;
}

@media (min-width: 1024px) {

    header h1 {
        font-size: 35px;
    }
    header p {
        font-size: 30px;
    }
}
</style>