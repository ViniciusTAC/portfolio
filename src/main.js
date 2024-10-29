import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import VueTheMask from 'vue-the-mask';

loadFonts();

const app = createApp(App);

// Use os plugins e o VueTheMask
app.use(router);
app.use(store);
app.use(vuetify);
app.use(VueTheMask);

app.mount('#app');
