import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/auth/login",
  },
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
        path: "fact/:id",
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

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem("userName");
  if (to.path.startsWith("/app") && !isAuthenticated) {
    return next({ name: "auth-login" });
  }
  if (to.path.startsWith("/auth") && isAuthenticated) {
    return next({ name: "app-facts" });
  }
  next();
});
export default router;
