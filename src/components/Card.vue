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

    starsVote(vote) {
      return Math.ceil(vote / 2);
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
          <div class="d-flex justify-content-center mb-4">
            <div v-for="punteggio in 5" :key="punteggio">
              <font-awesome-icon
                v-if="punteggio <= starsVote(vote)"
                icon="fa-solid fa-star"
              />
              <font-awesome-icon
                v-if="punteggio > starsVote(vote)"
                icon="fa-regular fa-star"
              />
            </div>
          </div>
          <div class="overview mx-2">
            <h4 class="fs-6">TRAMA</h4>
            <p>{{ overview }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// The flip card container
.flip-card {
  background-color: transparent;
  width: 300px;
  height: 450px;
  /* debug */
  border: 1px solid;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.flip-card-back {
  background-color: rgb(45, 47, 50);
  color: white;
  transform: rotateY(180deg);
}

.overview {
  height: 220px;
  overflow: auto;
}
</style>
