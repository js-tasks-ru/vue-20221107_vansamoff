import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const app = createApp({
  data() {
    return {
      first: 0,
      second: 0,
      operation: '',
    };
  },

  computed: {
    result() {
      if (this.operation === 'sum') {
        return this.first + this.second;
      }
      if (this.operation === 'subtract') {
        return this.first - this.second;
      }
      if (this.operation === 'multiply') {
        return this.first * this.second;
      }
      if (this.operation === 'divide') {
        return this.first / this.second;
      }
    },
  },
});

const vm = app.mount('#app');
