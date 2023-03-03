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
      console.log(this.newEndpointMovies);
      axios.get(this.endpointMovies).then((response) => {
        console.log(response);
        this.storeMovies.movies = response.data.results;
      })
    }
  },

  components: { AppHeader, AppMain }
}
</script>

<template>
  <AppHeader @searchingTime="searchOnServer" />
  <AppMain />
</template>

<style lang="scss"></style>