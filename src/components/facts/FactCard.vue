<template>
  <div class="fact-card d-block" @click="read(item)">
    <div class="row g-0 card-item">
      <img class="item-img mb-5" :src="item.img" alt="" />
      <div class="item-fact-wrapper">
        <p
          class="item-fact"
          :class="item.length < 100 ? 'short-fact' : 'long-fact'"
        >
          {{ item.fact }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
  methods: {
    read(item) {
      setTimeout(() => {
        this.$router.push(`/app/fact/${item.id}`);
      }, 300);
    },
  },
};
</script>
