<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      word: "",
    };
  },

  emits: ["SearchWord"],

  methods: {
    startSearch() {
      console.log("search word: ", this.word);
      this.$emit("SearchWord", this.word);
      this.word = "";
    },
  },
};
</script>

<template>
  <!-- *** COMPONENTE SEARCH *** -->
  <form class="d-flex" role="search" @submit.prevent="">
    <input
      class="form-control me-2"
      type="search"
      placeholder="Search"
      aria-label="Search"
      v-model="word"
      @keyup.enter="startSearch"
    />
    <button class="btn btn-danger" type="submit" @click="startSearch()">
      Search
    </button>
  </form>
</template>

<style lang="scss" scoped></style>
