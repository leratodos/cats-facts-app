import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import DefaultLayout from "./layouts/DefaultLayout.vue";
import AuthLayout from "./layouts/AuthLayout.vue";
import "./assets/main.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

Vue.config.productionTip = false;
Vue.component("LayoutDefault", DefaultLayout);
Vue.component("LayoutAuth", AuthLayout);
Vue.component("VSelect", vSelect);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
