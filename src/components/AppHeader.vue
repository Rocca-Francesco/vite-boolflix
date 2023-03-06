<script>
export default {
  data() {
    return {
      searchingTerm: '',
    }
  },

  methods: {
    searchSend(searchingTerm) {
      this.$emit('searchingTime', searchingTerm);
    }
  }
}
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand text-danger fw-bold" href="#">Boolflix</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <div class="d-flex">
            <input class="form-control me-2 bg-dark text-light" type="text" placeholder="Search" aria-label="Search"
              v-model="searchingTerm" @keyup.enter="searchSend(searchingTerm)">
            <button class="btn btn-outline-success" type="button" @click="searchSend(searchingTerm)">Search</button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped></style>