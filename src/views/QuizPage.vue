<template>
<div class="quiz-page-container" v-if="questions.length">
    <h1 id="quiz-cat">{{ questions[currentIndex - 1].category }}</h1>
    <quiz-index-compo :currentIndex="currentIndex" />
    <question-compo :question="questions[currentIndex - 1] || []" />
    <option-compo :options="questions[currentIndex - 1].options" @option-selected="handleOptionSelected" />
</div>
<div class="quiz-page-container" v-else>
    <p>Loading questions...</p>
</div>
<div v-if="showModal">
    <answer-modal :isCorrect="isCorrect" :currentIndex="currentIndex" :correct_answer="questions[currentIndex - 1].correct_answer" @nextQuestion="nextQuestion" />
</div>
</template>

<script>
import { mapState } from 'pinia'
import { useQuizStore } from '@/store/QuizStore.js'
import QuizIndexCompo from '@/components/QuizIndexCompo.vue'
import QuestionCompo from '@/components/QuestionCompo.vue'
import OptionCompo from '@/components/OptionCompo.vue'
import AnswerModal from '@/components/AnswerModal.vue'

export default {
  components: { QuizIndexCompo, QuestionCompo, OptionCompo, AnswerModal },
  props: {
    category: {
      type: [Number, String],
      default: null,
    },
    difficulty: {
      type: String,
      default: null
    },
    index: {
      type: Number,
      default: 1
    }
},
  data () {
    return {
        currentIndex: this.index || 1,
        quizAnswers: [],
        showModal: false,
        isCorrect: null,
    }
  },
  computed: {
    quizStore () {
      return useQuizStore()
    },
    ...mapState(useQuizStore, ['questions']),
  },
  async mounted () {
    
    this.currentCategory = this.category || this.quizStore.currentCategory || null
    this.currentDifficulty = this.difficulty || this.quizStore.currentDifficulty || null
    if (
      this.questions.length < 10 ||
      this.quizStore.currentCategory != this.currentCategory ||
      this.quizStore.currentDifficulty != this.currentDifficulty
    ) {
      await this.quizStore.fetchQuestions(this.currentCategory,this.currentDifficulty)
    }

    const answers = this.quizStore.quizAnswers
    let firstUnansweredIndex = -1;
    for (let i = 0; i < this.currentIndex; i++) {
      const a = answers?.[i] ?? null;
      if (!a || a.answer == null || a.answer === '') {
        firstUnansweredIndex = i;
        break;
      }
    }
    if (firstUnansweredIndex !== -1) {
      this.currentIndex = firstUnansweredIndex + 1
    }
    this.quizStore.currentIndex = this.currentIndex
    this.$router.replace({
      query: {
        ...this.$route.query,
        category: this.currentCategory,
        difficulty: this.currentDifficulty,
        index: this.currentIndex,
      }
    })
  },
  methods: {
    handleOptionSelected (option) {
      this.isCorrect = (option === this.questions[this.currentIndex - 1].correct_answer);
      this.showModal = true;
      useQuizStore().quizAnswers[this.currentIndex - 1] = {
        answer: option,
        isCorrect: this.isCorrect ? 1 : 0
      };
    },
    nextQuestion() {
      this.showModal = false;
      this.isCorrect = null;
      if (this.currentIndex < 10) {
        this.currentIndex++;
        useQuizStore().currentIndex = this.currentIndex;
        useQuizStore().saveToLocal()
        this.$router.push({
          query: {
            ...this.$route.query,
            category: this.currentCategory,
            difficulty: this.currentDifficulty,
            index: this.currentIndex,
          }
        });
      }
    }
  },
}
</script>

<style>
.quiz-page-container {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    padding: 10px 20vw;
    color: white;
    gap: 1rem;
}

@media (max-width: 1200px) {
    .quiz-page-container {
        padding: 10px 10vw;
    }
}

@media (max-width: 800px) {
    .quiz-page-container {
        padding: 10px 4vw;
        gap: 1rem;
    }
}

@media (max-width: 500px) {
    .quiz-page-container {
        padding: 10px 2vw;
        gap: 1rem;
    }
}

</style>