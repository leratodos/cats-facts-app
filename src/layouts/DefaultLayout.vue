<template>
  <div>
    <div class="content-wrapper">
      <HeaderComponent />
      <main>
        <div class="container page-container">
          <router-view />
        </div>
      </main>
      <FooterComponent />
    </div>
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
