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
  <div class="col-3" v-for="movie in listMovies">
    <h2>{{ movie.title }}</h2>
  </div>

  <!-- card sezione TV SERIES -->
  <div class="col-3" v-for="TVserie in listTVseries">
    <h2>{{ TVserie.name }}</h2>
  </div>
</template>

<style lang="scss" scoped></style>