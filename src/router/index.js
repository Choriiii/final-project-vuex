import { createWebHistory, createRouter } from "vue-router";
import HomeCompo from "@/components/HomeCompo.vue";

const routes = [
    {
        path:"/",
        name:"home",
        component:HomeCompo
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;