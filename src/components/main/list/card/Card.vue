<script>
import Language from "./card/Language.vue";
import Star from "./card/Star.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  components: {
    Language,
    Star,
  },
};
</script>

<template>
  <h1>{{ title }}</h1>
</template>

<style lang="scss" scoped></style>
