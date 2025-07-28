import { defineStore } from 'pinia';
import axios from 'axios'

export const useQuizStore = defineStore('quizStore', {
  state: () => ({
    questions: [],
    currentIndex: 1,
    quizAnswers: [],
  }),
  actions: {
    async fetchQuestions(category = null, difficulty = null) {
        if (this.questions.length > 0) return

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
            console.log('Quiz questions loaded:', res.data)
            if (res.data.response_code !== 0) throw new Error('Failed to load quiz questions')

            this.questions = res.data.results.map(q => {
                const options = [...q.incorrect_answers, q.correct_answer]

                for (let i = options.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1))
                    ;[options[i], options[j]] = [options[j], options[i]]
                }
                return {
                    ...q,
                    options
                }
            })
            console.log('Quiz questions:', this.questions)

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
  persist: true,
});