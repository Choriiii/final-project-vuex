import { createWebHistory, createRouter } from "vue-router";
import HomeCompo from "@/components/HomeCompo.vue";
import ProfileCompo from "@/components/ProfileCompo.vue";
import QuizPage from '@/views/QuizPage.vue';

const routes = [
    {
        path:"/",
        name:"home",
        component:HomeCompo
    },

    {
        path:"/profilepage",
        name:"ProfilePage",
        component:ProfileCompo
    },

    { path: '/quiz/:page', name:'quiz', component: QuizPage },

]

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;