import { defineStore } from 'pinia';
import axios from 'axios'
import he from 'he';

export const useQuizStore = defineStore('quizStore', {
  state: () => ({
    userId: null,
    questions: [],
    currentCategory: null,
    currentDifficulty: null,
    currentIndex: 1,
    quizAnswers: [],
    isProgressing: true
  }),
  actions: {
    async fetchQuestions(category = null, difficulty = null) {

        this.$reset()
        this.setUserId("test")
        
        const params = {
            amount: 10,
            type: 'multiple',
        }
        if (category) params.category = category
        if (difficulty) params.difficulty = difficulty

        try {
            const res = await axios.get('https://opentdb.com/api.php', {
                params: params
            })
            if (res.data.response_code !== 0) throw new Error('Failed to load quiz questions')

            this.questions = res.data.results.map(q => {
                const options = [
                  ...q.incorrect_answers.map(ans => he.decode(ans)),
                  he.decode(q.correct_answer)
                ]
                for (let i = options.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1))
                    ;[options[i], options[j]] = [options[j], options[i]]
                }
                return {
                    ...q,
                    category: he.decode(q.category),
                    question: he.decode(q.question),
                    correct_answer: he.decode(q.correct_answer),
                    options
                }
            })
            this.currentCategory = category;
            this.currentDifficulty = difficulty;
        } catch (e) {
            console.error('Failed load quiz:', e)
        }
    },
    answerQuestion(optionIndex) {
      this.quizAnswers[this.currentIndex - 1] = optionIndex
      if (this.currentIndex < this.questions.length) {
        this.currentIndex++
      }
    },
    setUserId(userId) {
      console.log("quizId", userId)
      this.userId = userId;
      console.log("quiz", this.userId)
    },
    saveIfInProgress() {
      if ( (this.questions.length && this.quizAnswers.length < this.questions.length) || this.isProgressing ) {
        localStorage.setItem(`quiz_${this.userId}`, JSON.stringify(this.$state))
      } else {
        localStorage.removeItem(`quiz_${this.userId}`)
      }
    },
    saveToLocal() {
      if (!this.userId) return
      localStorage.setItem(`quiz_${this.userId}`, JSON.stringify(this.$state))
    },
    loadFromLocal(saved) {
      if (!saved) return

      this.$patch(JSON.parse(saved))
    }
  },
  getters: {
    score(state) {
      return state.quizAnswers.reduce((sum, q) => sum + q.isCorrect, 0);
    }
  },
  persist: true,
});