<script>
import HeaderApp from "./components/header/HeaderApp.vue";
import MainApp from "./components/main/MainApp.vue";
import FooterApp from "./components/FooterApp.vue";

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
    FooterApp,
  },

  methods: {
    fetchPage(word) {
      axios
        .get(
          "https://api.themoviedb.org/3/search/multi?api_key=0ff807a2f823ddb0cbb849cc05534f0e&query=${word}"
        )
        .then((response) => {
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
  <HeaderApp @search-term="fetchPage" />
  <MainApp />
  <FooterApp />
</template>

<style lang="scss">
@use "./assets/styles/general.scss";
</style>
