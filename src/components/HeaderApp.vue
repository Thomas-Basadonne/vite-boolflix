<script>
import SearchTool from "./SerachTool.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  components: {
    SearchTool,
  },
};
</script>

<template>
  <header>
    <nav class="navbar bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand text-danger fw-bold fs-2" href="#"> BOOLFLIX </a>
        <SearchTool />
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped></style>
