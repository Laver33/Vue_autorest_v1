import { createApp } from 'vue'
import App from './App.vue'
import {createRouter,  createWebHistory} from 'vue-router';
import Testpage  from './pages/Testpage.vue'; 
import Homepage from './pages/Homepage.vue';


const router = createRouter ({
    history: createWebHistory(),
    routes : [

        { path: '/', component: Homepage},
        { path: '/test', component: Testpage },
    ]
});


const app = createApp(App);
app.use(router);
app.mount('#app');