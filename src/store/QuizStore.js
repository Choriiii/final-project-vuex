import { defineStore } from 'pinia';
import axios from 'axios'
import he from 'he';

export const useQuizStore = defineStore('quizStore', {
  state: () => ({
    questions: [],
    currentCategory: null,
    currentDifficulty: null,
    currentIndex: 1,
    quizAnswers: [],
  }),
  actions: {
    async fetchQuestions(category = null, difficulty = null) {

        // Check if questions are already loaded for the given category and difficulty
        if ( this.questions.length > 0 &&
          this.currentCategory == category &&
          this.currentDifficulty === difficulty ) return

        this.$reset()

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
  },
  getters: {
    score(state) {
      return state.quizAnswers.reduce((sum, q) => sum + q.isCorrect, 0);
    }
  },
  persist: true,
});