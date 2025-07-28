import { createWebHistory, createRouter } from "vue-router";
import HomeCompo from "@/components/HomeCompo.vue";
import QuizPage from '@/views/QuizPage.vue';
import ResultPage from '@/views/ResultPage.vue';

const routes = [
    {
        path:"/",
        name:"home",
        component:HomeCompo
    },
    { 
        path: '/quiz',
        name:'quiz',
        component: QuizPage,
        props: route => ({
            category: parseInt(route.query.category),
            difficulty: route.query.difficulty,
            index: parseInt(route.query.index)
        })
    },
    { 
        path: '/result',
        name:'result',
        component: ResultPage,
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;