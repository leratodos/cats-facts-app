<template>
  <header class="header">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between">
        <div class="logo">
          <a href="/app/facts">
            <img src="@/assets/img/logo.svg" alt="" />
          </a>
        </div>
        <div class="user dropdown">
          <a
            class="dropdown-toggle no-arrow text-decoration-none"
            href="javascript:void(0);"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <div
              v-if="userName"
              class="user-block d-flex align-items-center justify-content-center"
            >
              <span class="letter">
                {{ getFirstLetter(userName) }}
              </span>
            </div>
          </a>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" @click="logout">
                <span class="align-middle">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HeaderComponent",
  data() {
    return {
      user: "",
    };
  },
  computed: {
    ...mapGetters(["userName"]),
  },
  methods: {
    waitMs(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    getFirstLetter(str) {
      return str.charAt();
    },
    async logout() {
      await this.$store.dispatch("clearUser");
      await this.waitMs(100);
      await this.$router.push("/auth/login");
    },
  },
};
</script>
