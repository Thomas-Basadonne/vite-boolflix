<script>
export default {
  data() {
    return {
      term: "",
    };
  },
  props: {
    title: String,
  },
  emits: ["startSearch"],
};
</script>

<template>
  <header>
    <nav class="navbar bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand text-danger fw-bold fs-2" href="#">
          {{ title }}
        </a>

        <!-- *** COMPONENTE SEARCH *** -->
        <form
          class="d-flex"
          role="search"
          @submit.prevent="$emit('startSearch', term)"
        >
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            v-model="term"
          />
          <button class="btn btn-danger" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped></style>
