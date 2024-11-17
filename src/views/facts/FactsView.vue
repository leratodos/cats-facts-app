<template>
  <div>
    <h1>FactsView</h1>
  </div>
</template>
<script>
import WindowTitle from "@/mixins/window-title";

export default {
  mixins: [WindowTitle],
  computed: {
    windowTitle() {
      return "Facts";
    },
  },
};
</script>
