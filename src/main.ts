import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGridLayout from 'vue-grid-layout';

import { registerAntd } from './components/registerAntd';

import './assets/js/flexible.js';
import './assets/less/common.less'



router.beforeEach((to, from, next) => {
    next();
})

const app = createApp(App)
registerAntd(app);
app.use(store).use(VueGridLayout).use(router).mount('#app');
