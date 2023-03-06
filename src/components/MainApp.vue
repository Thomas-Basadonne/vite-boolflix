<script>
import Card from "./Card.vue";
export default {
  data() {},
  components: {
    Card,
  },

  props: {
    results: Array,
  },
};
</script>

<template>
  <main>
    <slot></slot>
    <div class="row row-cols-2 row-cols-lg-3 gap-4">
      <Card
        class="col"
        v-for="result in results"
        :title="result.title || result.name"
        :origTitle="result.original_title || result.original_name"
        :language="result.original_language"
        :vote="Math.round(result.vote_average) / 2"
        :endImgUrl="result.poster_path"
        :overview="result.overview"
      />
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
