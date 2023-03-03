<script>
export default {
  props: {
    MovieList: Object,
    TVList: Object
  }
}
</script>

<template>
  <main>
    <div id="film">
      <h2>FILM</h2>
      <ul>
        <li v-for="movie in MovieList.movies">{{ movie.title }}</li>
      </ul>
    </div>
    <div id="tvSeries">
      <h2>SERIE TV</h2>
      <ul>
        <li v-for="series in TVList.tvSeries">{{ series.name }}</li>
      </ul>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>