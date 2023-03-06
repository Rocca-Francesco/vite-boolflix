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
      <div class="container">
        <h2 class="text-danger">FILM</h2>
        <div class="row">
          <AppCardsTitoli :listMovies="storeMovies.movies" />
        </div>
      </div>
    </div>
    <!-- aggiungo un v-show per non visualizzare i titoli all'inizio ma anche nell'eventualità non ci siano risultati -->
    <div id="tvSeries" v-show="storeTVSeries.tvSeries.length > 0">
      <div class="container">
        <h2 class="text-danger">SERIE TV</h2>
        <div class="row">
          <AppCardsTitoli :listTVseries="storeTVSeries.tvSeries" />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  background-color: rgb(99, 99, 99);
  min-height: calc(100vh - 3.5rem);
}

h2 {
  font-size: 1.5rem;
  padding: 1rem;
}
</style>