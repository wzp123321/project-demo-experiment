import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGridLayout from 'vue-grid-layout';

import { registerAntd } from './components/registerAntd';

import './assets/js/flexible.js';
import './assets/less/common.less'



router.beforeEach((to, from, next) => {
    // console.log(to);
    // const aEle = document.createElement('a');
    // const pageName = to.params && to.params.pageName ? to.params.pageName : '';
    // console.log('pageName-----------', pageName);
    // to.query = {
    //     tenantCode: 'njts'
    // };
    // if(document.getElementsByTagName('iframe')?.length === 0){
    //     return
    // }
    // if (pageName) {
    //     aEle.href = "http://localhost:8080/" + pageName;
    //     aEle.target = "testIframe";
    //     aEle.click();
    //     console.log(aEle);
    // }
    // if(to.path === '/web'){
    //     next('/web/test')
    // }
    next();
})

const app = createApp(App)
registerAntd(app);
app.use(store).use(VueGridLayout).use(router).mount('#app');
