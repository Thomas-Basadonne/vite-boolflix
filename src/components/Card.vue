<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  props: {
    title: String,
    origTitle: String,
    language: String,
    vote: Number,
    endImgUrl: String,
    overview: String,
  },

  computed: {
    flagUrl() {
      return `https://flagcdn.com/16x12/${this.language}.png`;
    },
    posterUrl() {
      return `https://image.tmdb.org/t/p/w342${this.endImgUrl}`;
    },
  },
};
</script>

<template>
  <div class="card-container">
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="" alt="Copertina" class="img-fluid" />
        </div>
        <div class="flip-card-back">
          <h1 class="fs-3 my-3">{{ title }}</h1>
          <h3 class="fs-4 my-2">{{ origTitle }}</h3>
          <img :src="flagUrl" alt="" />
          <p>{{ vote }}</p>
          <p class="fs-6">{{ overview }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
