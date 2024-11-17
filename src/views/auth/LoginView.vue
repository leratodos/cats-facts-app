<template>
  <div class="login-view">
    <div class="login-form-wrapper">
      <h4 class="login-form-title">Log in</h4>
      <form class="login-form" @submit.prevent="loginMethod">
        <div class="mb-3">
          <label for="name" class="form-label mb-0">Name</label>
          <input
            id="name"
            type="text"
            class="form-input form-control"
            name="email"
            placeholder="Enter your name"
            autocomplete="name"
            autofocus
            required
          />
          <div class="invalid-feedback"></div>
        </div>
        <button class="btn btn-primary">Log in</button>
      </form>
    </div>
  </div>
</template>
<script>
import WindowTitle from "@/mixins/window-title";

export default {
  mixins: [WindowTitle],
  computed: {
    windowTitle() {
      return "Authorization";
    },
  },
  methods: {
    async loginMethod() {
      console.log("login");
      // this.loading = true;
      // ErrorHandler.clearErrors(document.getElementById("formAuthentication"));
      // const email = this.$refs.email.value;
      // const password = this.$refs.password.value;
      //
      // try {
      //   await this.login({ email, password });
      // } catch (e) {
      //   this.loading = false;
      //   if (e instanceof ErrorHandler) {
      //     e.showError();
      //   } else {
      //     throw e;
      //   }
      // }
      //
      // if (this.isAuthenticated) {
      //   if (window.localStorage && window.localStorage.initialRoute && window.localStorage.initialRoute.substring(0, 4) === "/app") {
      //     await this.$router.push(window.localStorage.initialRoute);
      //     window.localStorage.removeItem("initialRoute")
      //   } else {
      //     await this.$router.push("/app/start-page");
      //   }
      // } else {
      //   this.loading = false;
      // }
    },
  },
};
</script>
