import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGridLayout from 'vue-grid-layout';

import { registerAntd } from './components/registerAntd';


const app = createApp(App)
registerAntd(app);
app.use(store).use(VueGridLayout).use(router).mount('#app');
