import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import DefaultLayout from "./layouts/DefaultLayout.vue";
import AuthLayout from "./layouts/AuthLayout.vue";
import "./assets/scss/main.scss";

Vue.config.productionTip = false;
Vue.component("LayoutDefault", DefaultLayout);
Vue.component("LayoutAuth", AuthLayout);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
