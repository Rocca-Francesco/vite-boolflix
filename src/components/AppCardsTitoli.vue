<script>
export default {
  data() {
    return {
      // dichiaro la variabile che userò nella generazione delle bandiere
      urlFlag: "https://flagcdn.com/w40/",

      // dichiaro le variabili per generare le immagini
      endpointIMG: "http://image.tmdb.org/t/p/w185/",

      showInfoMovie: null,
      showInfoTV: null,
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
    },

    generateVote(voteNum) {
      return parseInt(voteNum / 2);
    },

    infoMovies(index) {
      this.showInfoMovie = index;
    },

    infoTV(index) {
      this.showInfoTV = index;
    },

    removeInfo() {
      this.showInfoMovie = null;
      this.showInfoTV = null;
    }
  }
}
</script>

<template>
  <!-- card sezione MOVIES -->
  <div class="cards col-3" v-for="(movie, index) in listMovies" @mouseover="infoMovies(index)" @mouseleave="removeInfo()">
    <div class="cardsBG">
      <div class="cardsCover" v-show="!(showInfoMovie == index)">
        <img class="imgBroken" v-if="movie.poster_path == null"
          src="https://cdn2.iconfinder.com/data/icons/symbol-gray-set-3b/100/1-40-512.png" alt="">
        <img v-else :src="generateCover(movie.poster_path)" :alt="movie.original_title">
      </div>
      <h3>Titolo Originale: {{ movie.original_title }}</h3>
      <h2>Titolo: {{ movie.title }}</h2>
      <span class="d-block">
        <span>Origine: </span>
        <img :src="generateFlags(movie.original_language)" width="30">
      </span>
      <!-- stars rate -->
      <div>
        <span>Voto: </span>
        <span><font-awesome-icon v-for="i in generateVote(movie.vote_average)" icon="fa-solid fa-star" /></span>
        <span><font-awesome-icon v-for="i in (5 - generateVote(movie.vote_average))" icon="fa-regular fa-star" /></span>
      </div>
    </div>
  </div>

  <!-- card sezione TV SERIES -->
  <div class="cards col-3" v-for="(TVserie, index) in listTVseries" @mouseover="infoTV(index)" @mouseleave="removeInfo()">
    <div class="cardsBG">
      <div class="cardsCover" v-show="!(showInfoTV == index)">
        <img class="imgBroken" v-if="TVserie.poster_path == null"
          src="https://cdn2.iconfinder.com/data/icons/symbol-gray-set-3b/100/1-40-512.png" alt="">
        <img v-else :src="generateCover(TVserie.poster_path)" :alt="TVserie.original_name">
      </div>
      <h3>Titolo Originale: {{ TVserie.original_name }}</h3>
      <h2>Titolo: {{ TVserie.name }}</h2>
      <span class="d-block">
        <span>Origine: </span>
        <img :src="generateFlags(TVserie.original_language)" width="30">
      </span>
      <!-- stars rate -->
      <div>
        <span>Voto: </span>
        <span><font-awesome-icon v-for="i in generateVote(TVserie.vote_average)" icon="fa-solid fa-star" /></span>
        <span><font-awesome-icon v-for="i in (5 - generateVote(TVserie.vote_average))" icon="fa-regular fa-star" /></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cardsCover {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    margin: -1rem;
  }
}


.cardsBG {
  position: relative;
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: whitesmoke;
  min-height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.imgBroken {
  width: 11rem;
  align-self: center;
}

h2 {
  font-size: 1.2rem;
}

h3 {
  font-size: 0.5rem;
}
</style>