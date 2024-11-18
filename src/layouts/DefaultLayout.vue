<template>
  <div>
    <HeaderComponent />
    <main>
      <div class="container page-container">
        <router-view />
      </div>
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "@/components/partials/HeaderComponent.vue";
import FooterComponent from "@/components/partials/FooterComponent.vue";

export default {
  name: "DefaultLayout",
  components: { FooterComponent, HeaderComponent },
};
</script>
