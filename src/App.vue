<script>
import HeaderApp from "./components/HeaderApp.vue";
import MainApp from "./components/MainApp.vue";

import axios from "axios";
import { store } from "./data/store";

export default {
  data() {
    return {
      store,
    };
  },

  components: {
    HeaderApp,
    MainApp,
  },

  methods: {
    fetchPage(word) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/multi?api_key=0ff807a2f823ddb0cbb849cc05534f0e&query=${word}`
        )
        .then((response) => {
          console.log("response: ", response.data.results);
          store.everyResults = response.data.results;
          store.movieArray = store.everyResults.filter(
            (result) => result.media_type == "movie"
          );
          store.seriesArray = store.everyResults.filter(
            (result) => result.media_type == "tv"
          );
        });
    },
  },
};
</script>

<template>
  <HeaderApp @SearchWord="fetchPage" />
  <MainApp :results="store.movieArray">
    <h1 v-if="store.movieArray.length > 0" class="pt-5">Movies</h1>
  </MainApp>
  <MainApp :results="store.seriesArray">
    <h1 v-if="store.seriesArray.length > 0" class="pt-5">Series</h1>
  </MainApp>
</template>

<style lang="scss">
@use "./assets/styles/general.scss";
</style>
