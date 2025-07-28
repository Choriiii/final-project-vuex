<template>
<div class="quiz-page-container" v-if="questions.length">
    <h1 id="quiz-cat">{{ currentCategory }}</h1>
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
      type: Number,
      default: 9 // General Knowledge
    },
    difficulty: {
      type: String,
      default: 'medium'
    },
    index: {
      type: Number,
      default: 1
    }
},
  data () {
    return {
        currentCategory: this.category || 9,
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
        await this.quizStore.fetchQuestions(this.category, this.difficulty)
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
        this.$router.push({
          query: {
            ...this.$route.query,
            category: this.currentCategory,
            difficulty: this.difficulty,
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
    padding: 5vh 20vw;
    color: white;
    gap: 30px;
}

</style>