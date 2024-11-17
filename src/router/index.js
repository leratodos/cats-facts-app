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
    children: [
      {
        path: "login",
        name: "auth-login",
        meta: { layout: "layout-auth" },
        component: () => import("../views/auth/LoginView.vue"),
      },
    ],
  },
  // App routes
  {
    path: "/app",
    // meta: { layout: "layout-default" },
    component: () => import("../views/facts/FactsView.vue"),
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
