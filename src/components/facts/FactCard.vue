<template>
  <a class="fact-card d-block">
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
  </a>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
};
</script>
