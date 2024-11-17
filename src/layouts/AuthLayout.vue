<template>
  <div>
    <HeaderComponent />
    <LoginView />
  </div>
</template>

<script>
import HeaderComponent from "@/components/partials/HeaderComponent.vue";
import LoginView from "@/views/auth/LoginView.vue";

export default {
  name: "AuthLayout",
  components: { LoginView, HeaderComponent },
};
</script>
