import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import LoginView from "../views/LoginView.vue";
import CartView from "@/views/CartView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },

        {
            path: "/about",
            name: "about",
            component: AboutView,
        },
        {
            path: "/products",
            name: "products",
            component: () => import("@/views/ProductsView.vue"),
        },
        {
            path: "/products/:id",
            name: ":id",
            component: () => import("@/views/SingleProductView.vue"),
        },
        {
            path: "/cart",
            name: "cart",
            component: CartView,
        },
        {
            path: "/login",
            name: "login",
            component: LoginView,
        },
    ],
});

export default router;
