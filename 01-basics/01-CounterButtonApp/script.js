import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const app = createApp({
  data() {
    return {
      counter: 0,
    };
  },

  methods: {
    add() {
      this.counter += 1;
    },
  },
}).mount('#app');
