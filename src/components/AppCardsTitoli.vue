<script>
export default {
  data() {
    return {
      // dichiaro la variabile che userò nella generazione delle bandiere
      urlFlag: "https://flagcdn.com/w40/",

      // dichiaro le variabili per generare le immagini
      endpointIMG: "http://image.tmdb.org/t/p/w185/",
      cover: '',
      covers: [],
    }
  },

  props: {
    listMovies: Array,
    listTVseries: Array,
  },

  methods: {
    generateFlags(nation) {
      if (nation == "en") {
        nation = "gb";
      } else if (nation == "ja") {
        nation = "jp";
      }
      return this.urlFlag + nation + ".png";
    },

    generateCover(urlIMG) {
      return this.endpointIMG + urlIMG;
    }
  }
}
</script>

<template>
  <!-- card sezione MOVIES -->
  <div class="col-3 text-center" v-for="movie in listMovies">
    <div class="cardsBG">
      <div>
        <img :src="generateCover(movie.poster_path)" :alt="movie.original_title">
      </div>
      <h3>{{ movie.original_title }}</h3>
      <h2>{{ movie.title }}</h2>
      <span class="d-block">
        <img :src="generateFlags(movie.original_language)" width="30">
      </span>
      <span>{{ movie.vote_average }}</span>
    </div>
  </div>

  <!-- card sezione TV SERIES -->
  <div class="col-3 text-center" v-for="TVserie in listTVseries">
    <div class="cardsBG">
      <div>
        <img :src="generateCover(TVserie.poster_path)" :alt="TVserie.original_name">
      </div>
      <h3>{{ TVserie.original_name }}</h3>
      <h2>{{ TVserie.name }}</h2>
      <span class="d-block">
        <img :src="generateFlags(TVserie.original_language)" width="30">
      </span>
      <span>{{ TVserie.vote_average }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cardsBG {
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: whitesmoke;
  min-height: 30rem;
}

h2 {
  font-size: 1.2rem;
}

h3 {
  font-size: 0.5rem;
}
</style>