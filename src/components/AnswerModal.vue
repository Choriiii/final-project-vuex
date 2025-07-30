<template>
  <div class="answer-modal" :class="isCorrect ? 'modal-correct' : 'modal-incorrect'">
    <h2 :class="isCorrect ? 'correct' : 'incorrect'">
      {{ isCorrect ? 'CORRECT!!' : 'FAILED...' }}
    </h2>
    <p v-if="!isCorrect" class="correct-answer">Correct Answer: <span>{{ correct_answer }}</span></p>
    <div id="answer-btn-wrapper">
      <button v-if="currentIndex < 10" @click="nextQuestion">NEXT</button>
      <button v-else @click="$router.push('/result')">SHOW RESULT</button>
    </div>
 </div>
</template>

<script>
export default {
    name: 'AnswerModal',
    props: {
        isCorrect: {
            type: Boolean,
            required: true
        },
        correct_answer: {   
            type: String,
            required: false
        },
        currentIndex: {
            type: Number,
            required: true
        }
    },
    methods: {
        nextQuestion() {
            this.$emit('nextQuestion');
        },
        isActive(option) {
          return localStorage.getItem('selectedAnswer') === option;
        }
    }   
}
</script>

<style>
.answer-modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 75vh;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    border-radius: 20px;
    color: white;
    text-align: center;
    min-height: 20vh;
    width: 50vw;
    border-radius: 10px;
}

.answer-modal.modal-correct {
  background: linear-gradient(180deg, #379D6A 0%, #5ed197 100%);
  opacity: 95%;
  padding-top: 50px;
}

.answer-modal.modal-incorrect {
  background-color: #EC4042;
  opacity: 95%;
}

.answer-modal h2 {
  font-size: 2rem;
  margin-bottom: 18px;
  letter-spacing: 2px;
}

.answer-modal h2.correct {
  color: #FDB94B;
  text-shadow: 0 2px 8px #E38E03;
}

.answer-modal h2.incorrect {
  color: #2575fc;
  text-shadow: 0 2px 8px #3336;
}

.correct-answer {
  font-size: 1.1rem;
  margin-bottom: 24px;
}

.correct-answer span {
  font-weight: bold;
  color: #ebca12;
}

#answer-btn-wrapper {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding: 20px;
}

#answer-btn-wrapper button {
  background: #ffccdb;
  color: rgb(79, 77, 77);
  padding: 12px 28px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1rem;
  box-shadow: 0 2px 8px rgba(31,38,135,0.15);
  border: none;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}

#answer-btn-wrapper button:hover {
  background-color: #FDB94B;
}

@media (max-width: 800px) {
  .answer-modal {
    top: 50vh;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80vw;
    min-height: 40vh;
    padding: 40px;
    border-radius: 16px;
  }
  #answer-btn-wrapper {
    justify-content: center;
  }
}

</style>