import { defineStore } from 'pinia';

export const useTaskStore = defineStore('quizStore', {
  state: () => ({
    quizzes: [],
  }),
  actions: {
  },
});