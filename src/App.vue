<script>
// componenti pagina
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
// axios per le chiamate
import axios from "axios";
// storage per i dati cercati
import { storeMovies } from "./assets/storeMovies";
import { storeTVSeries } from "./assets/storeTVSeries";

export default {
  data() {
    return {
      storeMovies,
      storeTVSeries,
      endpointMovies: "https://api.themoviedb.org/3/search/movie?api_key=c9d251e8f5dc4e4147cc8a8e957c1f1b&language=it-IT&query=",
      newEndpointMovies: "",
      endpointTVSeries: "https://api.themoviedb.org/3/search/tv?api_key=c9d251e8f5dc4e4147cc8a8e957c1f1b&language=it-IT&query=",
      newEndpointTVSeries: ""
    }
  },

  methods: {
    searchOnServer(searchingTerm) {
      // definisco l'url di ricerca X I MOVIES, creandolo dalla ricerca base + il termine cercato
      this.newEndpointMovies = this.endpointMovies + searchingTerm;
      axios.get(this.newEndpointMovies).then((response) => {
        this.storeMovies.movies = response.data.results;
        console.log(this.storeMovies.movies);
      });
      // definisco l'url di ricerca X LE TV SERIES, creandolo dalla ricerca base + il termine cercato
      this.newEndpointTVSeries = this.endpointTVSeries + searchingTerm;
      console.log(this.newEndpointTVSeries);
      axios.get(this.newEndpointTVSeries).then((response) => {
        this.storeTVSeries.tvSeries = response.data.results;
        console.log(this.storeTVSeries.tvSeries);
      });
    }
  },

  components: { AppHeader, AppMain }
}
</script>

<template>
  <AppHeader @searchingTime="searchOnServer" />
  <AppMain :MovieList="storeMovies" :TVList="storeTVSeries" />
</template>

<style lang="scss"></style>