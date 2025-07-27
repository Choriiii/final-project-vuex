import { createWebHistory, createRouter } from "vue-router";
import HomeCompo from "@/components/HomeCompo.vue";
import QuizPage from '@/views/QuizPage.vue';

const routes = [
    {
        path:"/",
        name:"home",
        component:HomeCompo
    },
    { path: '/quiz/:page', name:'quiz', component: QuizPage },
]

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;