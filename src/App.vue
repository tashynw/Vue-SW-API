<template>
  <h1 class="title-text">Vue.js API Practice</h1>
  <router-view :filmsData="filmsData"/>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data: function () {
    return {
      filmsData: {}
    }
  },
  methods: {
    loadFilms: function () {
      axios.get('https://swapi.dev/api/films/')
        .then((response) => {
          this.filmsData = response.data.results
        })
    }
  },
  mounted: function () {
    this.loadFilms()
  }
}
</script>
