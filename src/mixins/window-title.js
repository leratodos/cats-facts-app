export default {
  watch: {
    windowTitle(value) {
      this.updateWindowTitle(value);
    },
  },
  mounted() {
    this.updateWindowTitle(this.windowTitle);
  },
  methods: {
    updateWindowTitle(title) {
      document.title = title ? `${title} | Cats` : "Cats";
    },
  },
};
