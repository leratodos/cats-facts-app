<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
export default {
  computed: {
    layout() {
      let layout = this.$route.meta.layout;
      if (layout) {
        return layout;
      }
      if (this.$route.path.startsWith("/auth")) {
        return "layout-auth";
      }
      return "layout-default";
    },
  },
};
</script>
