<template>
  <div class="login-view">
    <div class="login-form-wrapper">
      <h4 class="login-form-title">Log in</h4>
      <form class="login-form" @submit.prevent="login">
        <div class="input-wrapper position-relative">
          <label for="name" class="form-label mb-0">Name</label>
          <input
            v-model="user"
            :class="{ error: hasError }"
            id="name"
            type="text"
            class="form-input form-control"
            name="email"
            placeholder="Enter your name"
            autocomplete="name"
            autofocus
            required
            @focus="hasError = false"
          />
          <div v-if="hasError" class="invalid-message position-absolute">
            Enter your name
          </div>
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
  data() {
    return {
      user: "",
      hasError: false,
    };
  },
  computed: {
    windowTitle() {
      return "Authorization";
    },
  },
  methods: {
    validUserCheck(name) {
      if (
        !name.trim() ||
        name.length < 3 ||
        name.length > 15 ||
        /[^a-zA-Z]/.test(name)
      ) {
        this.hasError = true;
        return false;
      }
      return true;
    },
    async login() {
      if (this.validUserCheck(this.user)) {
        await this.$store.dispatch("saveUserName", this.user);
        await this.$router.push("/app/facts");
      }
    },
  },
};
</script>
