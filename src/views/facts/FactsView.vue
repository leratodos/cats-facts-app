<template>
  <div>
    <h1>FactsView</h1>
    <button v-if="lastPage > page" @click="loadMore">loadmore</button>
    {{ page }}
    {{ lastPage }}
  </div>
</template>
<script>
import WindowTitle from "@/mixins/window-title";
import factsService from "@/services/facts-service";

export default {
  mixins: [WindowTitle],
  data() {
    return {
      pagination: [],
      page: 1,
      lastPage: undefined,
    };
  },
  computed: {
    windowTitle() {
      return "Facts";
    },
  },
  mounted() {
    this.loadData(this.page);
  },
  methods: {
    loadMore() {
      this.page = this.page ? this.page + 1 : 1;
      this.loadData(this.page);
    },
    processData(arr) {
      const data = JSON.parse(JSON.stringify(arr));
      this.lastPage = data.last_page;

      // Отримуємо останній ID із існуючого this.pagination
      const lastId = this.pagination.length
        ? this.pagination[this.pagination.length - 1].id
        : 0;

      const processedData = data.data.map((item, index) => ({
        id: lastId + index + 1,
        fact: item.fact,
        length: item.length,
      }));

      this.pagination = [...this.pagination, ...processedData];

      console.log(JSON.parse(JSON.stringify(this.pagination)));
    },
    async loadData(page) {
      if (!page) {
        page = 1;
      }
      const filters = {
        page: page,
      };
      try {
        const resp = await factsService.browse(filters);
        this.processData(resp);
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>
