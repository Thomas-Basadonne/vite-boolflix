<script>
import Card from "./Card.vue";
import { store } from "../data/store";

export default {
  data() {
    return {
      store,
    };
  },

  components: {
    Card,
  },
};
</script>

<template>
  <main>
    <!-- SECTION FILM -->
    <div v-if="store.filmList.length">
      <h2 class="badge text-bg-danger fs-2 my-5">Film</h2>
      <div class="row row-cols-4 gy-5">
        <card
          v-for="film in store.filmList"
          :title="film.title"
          :originalTitle="film.originalTitle"
          :lang="film.lang"
          :vote="film.vote"
          :overview="film.overview"
          :poster="film.poster"
        />
      </div>
    </div>

    <!-- SECTION SERIE -->
    <div v-if="store.TvSeriesList.length">
      <h2 class="badge text-bg-danger fs-2 my-5">Serie tv</h2>
      <div class="row row-cols-4 gy-5">
        <card
          v-for="TvSerie in store.TvSeriesList"
          :title="TvSerie.title"
          :originalTitle="TvSerie.originalTitle"
          :lang="TvSerie.lang"
          :vote="TvSerie.vote"
          :overview="TvSerie.overview"
          :poster="TvSerie.poster"
        />
      </div>
    </div>
    <h1
      v-if="!store.filmList.length && !store.TvSeriesList.length"
      class="fs-1 p-5 fw-bold position-absolute top-50 start-50 translate-middle badge rounded-pill text-bg-danger text-white"
    >
      Cerca un titolo di un film o di una serie tv!
    </h1>
  </main>
</template>

<style lang="scss" scoped></style>
