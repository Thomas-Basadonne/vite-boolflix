<script>
import { store } from "../data/store";

export default {
  data() {
    return {
      store,
    };
  },
  props: {
    title: String,
    originalTitle: String,
    lang: String,
    vote: Number,
    poster: String,
    overview: String,
  },

  methods: {
    // da lingua a bandiera
    getFlag(country) {
      country = country.toUpperCase();

      // casi particolari
      if (country == "EN") return "https://flagsapi.com/GB/flat/64.png";
      if (country == "KO") return "https://flagsapi.com/KR/flat/64.png";
      if (country == "JA") return "https://flagsapi.com/JP/flat/64.png";
      if (country == "ZH") return "https://flagsapi.com/CN/flat/64.png";
      if (country == "ZH") return "https://flagsapi.com/CN/flat/64.png";

      return "https://flagsapi.com/" + country + "/flat/64.png";
    },
  },
};
</script>

<template>
  <div class="col mx-0 card-container">
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img :src="store.ImgPath + poster" alt="" class="img-fluid" />
        </div>
        <div class="flip-card-back">
          <h1 class="fs-3 my-3">{{ title }}</h1>
          <h3 class="fs-4 my-2">{{ originalTitle }}</h3>
          <span>
            <img :src="getFlag(lang)" alt="" />
          </span>
          <p>{{ vote }}</p>
          <p class="fs-6">TRAMA</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
