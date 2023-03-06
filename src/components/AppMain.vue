<script>
// storage per i dati cercati
import { storeMovies } from "../assets/storeMovies";
import { storeTVSeries } from "../assets/storeTVSeries";
// importo file per generare le cards per ogni titolo
import AppCardsTitoli from "./AppCardsTitoli.vue";

export default {
  data() {
    return {
      storeMovies,
      storeTVSeries,
    }
  },

  components: { AppCardsTitoli }
}
</script>

<template>
  <main>
    <!-- aggiungo un v-show per non visualizzare i titoli all'inizio ma anche nell'eventualità non ci siano risultati -->
    <div id="film" v-show="storeMovies.movies.length > 0">
    <h2>FILM</h2>
    <div class="container">
        <div class="row">
          <AppCardsTitoli :listMovies="storeMovies.movies" />
        </div>
      </div>
      <!-- <ul>
            <li v-for="movie in storeMovies.movies">{{ movie.title }}</li>
          </ul> -->
    </div>
    <!-- aggiungo un v-show per non visualizzare i titoli all'inizio ma anche nell'eventualità non ci siano risultati -->
    <div id="tvSeries" v-show="storeTVSeries.tvSeries.length > 0">
      <h2>SERIE TV</h2>
      <div class="container">
        <div class="row">
          <AppCardsTitoli :listTVseries="storeTVSeries.tvSeries" />
        </div>
      </div>
      <!-- <ul>
          <li v-for="series in storeTVSeries.tvSeries">{{ series.name }}</li>
        </ul> -->
    </div>
  </main>
</template>

<style lang="scss" scoped></style>