<template>
  <div>
    <HeaderComponent />
    <router-view />
  </div>
</template>

<script>
import HeaderComponent from "@/components/partials/HeaderComponent.vue";

export default {
  name: "AuthLayout",
  components: { HeaderComponent },
};
</script>
