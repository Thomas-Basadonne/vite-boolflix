<script>
import SearchTool from "./components/SearchTool.vue";
import MainApp from "./components/MainApp.vue";

import axios from "axios";
import { store } from "./data/store";

export default {
  data() {
    return {
      title: "Boolflix",
      baseUri: "https://api.themoviedb.org/3",
      apiKey: "0ff807a2f823ddb0cbb849cc05534f0e",
      filmList: [],
      store,
    };
  },

  components: {
    SearchTool,
    MainApp,
  },

  methods: {
    // funzione che le attiva entrambe
    fetchResults(term) {
      this.fetchMovies(term);
      this.fetchTvSeries(term);
    },

    // ricerca api tra i film
    fetchMovies(query) {
      axios
        .get(
          `${this.baseUri}/search/movie?api_key=${this.apiKey}&query=${query}`
        )
        .then((response) => {
          const films = response.data.results.map((film) => {
            return {
              title: film.title,
              originalTitle: film.original_title,
              lang: film.original_language,
              vote: film.vote_average,
              poster: film.poster_path,
            };
          });

          store.filmList = films;
        });
    },

    // ricerca api tra le serie
    fetchTvSeries(query) {
      axios
        .get(`${this.baseUri}/search/tv?api_key=${this.apiKey}&query=${query}`)
        .then((response) => {
          const tvSeries = response.data.results.map((tvSerie) => {
            return {
              title: tvSerie.name,
              originalTitle: tvSerie.original_name,
              lang: tvSerie.original_language,
              vote: tvSerie.vote_average,
              poster: tvSerie.poster_path,
            };
          });
          store.TvSeriesList = tvSeries;
        });
    },
  },
};
</script>

<template>
  <SearchTool :title="title" @startSearch="fetchResults" />

  <main class="container">
    <MainApp />
  </main>
</template>

<style lang="scss">
@use "./assets/styles/general.scss";
</style>
