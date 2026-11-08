import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueTheMask from 'vue-the-mask';
import './assets/tema.css';

const app = createApp(App);

// Use os plugins e o VueTheMask
app.use(router);
app.use(store);
app.use(VueTheMask);

app.mount('#app');
