<template>
  <div class="facts-view">
    <h2 class="page-title text-center">Facts About Cats To Share With Kids!</h2>
    <div class="row mb-4 d-flex justify-content-between">
      <div class="col-md-5 col-xl-4 mb-2">
        <div class="input-search-wrapper position-relative">
          <i class="bx bx-search"></i>
          <input
            v-model="search"
            placeholder="Search facts here"
            class="form-control input-search"
            type="text"
          />
        </div>
      </div>
      <div class="col-md-5 col-xl-4 mb-2">
        <div class="input-search-wrapper">
          <v-select
            v-model="selectedOption"
            :options="selectOptions"
            :clearable="false"
            :searchable="false"
            :reduce="(el) => el.id"
            label="name"
          />
        </div>
      </div>
    </div>
    <div v-if="loading" class="mb-5 text-center">Loading...</div>
    <div v-if="filteredFacts.length > 0">
      <div
        class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-xl-3 g-4 mb-3"
      >
        <div v-for="el in filteredFacts" :key="el.id" class="col">
          <FactCard :item="el" />
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <button class="btn btn-clear" v-if="lastPage > page" @click="loadMore">
          Load more facts
        </button>
      </div>
    </div>
    <div class="mb-5" v-else-if="!loading">No cats and no facts :(</div>
  </div>
</template>
<script>
import WindowTitle from "@/mixins/window-title";
import factsService from "@/services/facts-service";
import FactCard from "@/components/facts/FactCard.vue";

export default {
  components: { FactCard },
  mixins: [WindowTitle],
  data() {
    return {
      pagination: [],
      selectedOption: 1,
      page: 1,
      lastPage: undefined,
      test: [1, 2, 3],
      selectOptions: [
        { id: 1, name: "All facts" },
        { id: 2, name: "Show long ones first" },
        { id: 3, name: "Show short ones first" },
        { id: 4, name: "Short ones only" },
        { id: 5, name: "Long ones only" },
      ],
      selectedFilter: 1,
      search: "",
      loading: false,
    };
  },
  computed: {
    windowTitle() {
      return "Facts";
    },
    filteredFacts() {
      let facts = [...this.pagination];
      switch (this.selectedOption) {
        case 2:
          facts = facts.sort((a, b) => b.length - a.length);
          break;
        case 3:
          facts = facts.sort((a, b) => a.length - b.length);
          break;
        case 4:
          facts = facts.filter((item) => item.length < 100);
          break;
        case 5:
          facts = facts.filter((item) => item.length >= 100);
          break;
        default:
          break;
      }

      if (this.search.trim()) {
        const lowerSearch = this.search.toLowerCase();
        facts = facts.filter((item) =>
          item.fact.toLowerCase().includes(lowerSearch)
        );
      }
      return facts;
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

      const lastId = this.pagination.length
        ? this.pagination[this.pagination.length - 1].id
        : 0;

      const processedData = data.data.map((item, index) => ({
        id: lastId + index + 1,
        fact: item.fact,
        length: item.length,
        img: `/assets/img/cats/${index + 1}.webp`,
      }));

      this.pagination = [...this.pagination, ...processedData];
    },
    async loadData(page) {
      if (!page) {
        page = 1;
      }
      this.loading = true;
      const filters = {
        page: page,
      };
      try {
        const resp = await factsService.browse(filters);
        this.processData(resp);
      } catch (e) {
        console.error(e);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
