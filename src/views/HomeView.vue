<template>
  <div v-if="filmsData">
    <div class="all-cards-box">
      <div class="card-box" v-for="(film, i) in filmsData" :key="i">
        <router-link :to="`/${film.title}`" style="text-decoration: none; color: inherit"><p class="card-name">{{ film.title }}</p></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  props: ['filmsData']
}
</script>
