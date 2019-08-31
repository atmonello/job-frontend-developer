<template>
  <header class="d-flex justify-center">
    <h1 v-if="!showResults">Buscar Artista</h1>
    <v-btn
      v-else
      dark
      rounded
      @click="
        resetSearch();
        backToIndex();
      "
      >Buscar novamente</v-btn
    >
  </header>
</template>

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
      resetSearch: 'search/resetSearch'
    }),
    backToIndex() {
      this.$nuxt.$router.push('/');
    }
  }
};
</script>
