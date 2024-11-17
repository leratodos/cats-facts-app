<template>
  <div id="app">
    <div :data-layout="layout">
      <router-view />
    </div>
  </div>
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
