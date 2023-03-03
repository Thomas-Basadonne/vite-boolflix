<script>
import HeaderApp from "./components/header/HeaderApp.vue";
import MainApp from "./components/main/MainApp.vue";
import FooterApp from "./components/FooterApp.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  components: {
    HeaderApp,
    MainApp,
    FooterApp,
  },
};
</script>

<template>
  <HeaderApp />
  <MainApp />
  <FooterApp />
</template>

<style lang="scss">
@use "./assets/styles/general.scss";
</style>
