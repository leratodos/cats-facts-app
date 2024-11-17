<template>
  <header class="header">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between">
        <div class="logo">
          <a href="#">
            <img src="@/assets/img/logo.svg" alt="" />
          </a>
        </div>
        <div class="user dropdown">
          <a
            class="dropdown-toggle no-arrow"
            href="javascript:void(0);"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <div class="avatar"></div>
          </a>
          <ul class="dropdown-menu">
            <li>
              <router-link to="/app/profile" class="dropdown-item">
                <i class="bx bx-cog me-2"></i>
                <span class="align-middle">Profile</span>
              </router-link>
            </li>
            <li>
              <a class="dropdown-item" @click="onLogout">
                <i class="bx bx-power-off me-2"></i>
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
export default {
  name: "HeaderComponent",
  data() {
    return {};
  },
  methods: {
    async onLogout() {
      console.log("log out");
      // this.loading = true;
      // await this.logout();
      // await this.waitMs(1000);
      // this.$router.push("/auth/login");
    },
  },
};
</script>
