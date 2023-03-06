<script>
export default {
  props: {
    listMovies: Array,
    listTVseries: Array,
  }
}
</script>

<template>
  <!-- card sezione MOVIES -->
  <div class="col-3 text-center" v-for="movie in listMovies">
    <h3>{{ movie.original_title }}</h3>
    <h2>{{ movie.title }}</h2>
    <span class="d-block">{{ movie.original_language }}</span>
    <span>{{ movie.vote_average }}</span>
  </div>

  <!-- card sezione TV SERIES -->
  <div class="col-3 text-center" v-for="TVserie in listTVseries">
    <h3>{{ TVserie.original_name }}</h3>
    <h2>{{ TVserie.name }}</h2>
    <span class="d-block">{{ TVserie.original_language }}</span>
    <span>{{ TVserie.vote_average }}</span>
  </div>
</template>

<style lang="scss" scoped>
h3 {
  font-size: 0.5rem;
}
</style>