import { createWebHistory, createRouter } from "vue-router";
import HomeCompo from "@/components/HomeCompo.vue";
import ProfileCompo from "@/components/ProfileCompo.vue";
import QuizPage from '@/views/QuizPage.vue';
import ResultPage from '@/views/ResultPage.vue';
import QuizApp from '@/views/QuizApp.vue';

const routes = [
    {
        path:"/",
        name:"home",
        component:HomeCompo
    },
    {
        path:"/app",
        name:"app",
        component:QuizApp
    },
    {
        path:"/profilepage",
        name:"ProfilePage",
        component:ProfileCompo
    },
    { 
        path: '/quiz',
        name:'quiz',
        component: QuizPage,
        props: route => ({
            category: route.query.category,
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