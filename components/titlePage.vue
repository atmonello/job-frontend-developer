<template>
  <header>
    <h1 v-if="!showResults">Buscar Artista</h1>
    <v-btn v-else dark rounded @click="backToIndex">Buscar novamente</v-btn>
  </header>
</template>

<style lang="scss" scoped>
header {
  user-select: none;
}
</style>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      showResults: 'search/getSearchResultStatus'
    })
  },
  methods: {
    ...mapActions({
      // toggleSerchResults: 'search/toggleSearchResults',
      resetSearch: 'search/resetSearch'
    }),
    backToIndex() {
      this.$nuxt.$router.push('/');
      // this.toggleSerchResults();
      this.resetSearch();
    }
  }
};
</script>
