<template>
	<div class="card-box-individual">
    <p class="card-name-individual">{{ specificFilm.title }}</p>
    <p class="card-name-individual">Director: {{ specificFilm.director }}</p>
    <p class="card-name-individual">Producer: {{ specificFilm.producer }}</p>
  </div>
	<router-link to="/"><p>Home</p></router-link>
</template>

<script>
export default {
  name: 'CardView',
  props: ['filmsData'],
  data: function () {
    return {
      specificFilm: {}
    }
  },
  methods: {
    getSpecificFilm: function () {
      const cardId = this.$router.currentRoute._value.fullPath.slice(1)
      this.specificFilm = this.filmsData.find((film) => film.title === decodeURI(cardId))
    }
  },
  mounted: function () {
    if (this.filmsData && this.filmsData.length > 0) {
      this.getSpecificFilm()
    }
  },
  watch: {
    filmsData: function (oldVal, newVal) {
      if (this.filmsData) {
        this.getSpecificFilm()
      }
    }
  }
}
</script>
