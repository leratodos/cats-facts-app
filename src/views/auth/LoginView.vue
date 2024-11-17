<template>
  <div>
    <h1>LoginView</h1>
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
};
</script>
