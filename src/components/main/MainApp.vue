<script>
import FilmList from "../main/list/FilmList.vue";
import SeriesLIst from "../main/list/SeriesLIst.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  components: {
    FilmList,
    SeriesLIst,
  },
};
</script>

<template>
  <main>
    <div><FilmList /></div>
    <div><SeriesLIst /></div>
  </main>
</template>

<style lang="scss" scoped></style>
