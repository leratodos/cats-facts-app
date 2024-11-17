import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // Root route
  {
    path: "/",
    redirect: "/auth/login",
  },
  // Auth routes
  {
    path: "/auth",
    component: () => import("../layouts/AuthLayout.vue"),
    meta: { layout: "layout-auth" },
    children: [
      {
        path: "login",
        name: "auth-login",
        component: () => import("../views/auth/LoginView.vue"),
      },
    ],
  },
  // App routes
  {
    path: "/app",
    component: () => import("../layouts/DefaultLayout.vue"),
    meta: { layout: "layout-default" },
    children: [
      {
        path: "facts",
        name: "app-facts",
        component: () => import("../views/facts/FactsView.vue"),
      },
      {
        path: "facts/:id",
        name: "app-read-fact",
        component: () => import("../views/facts/ReadFactView.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
