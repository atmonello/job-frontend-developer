<template>
  <header>
    <h1 v-if="!showResults">Buscar Artista</h1>
    <v-container v-else>
      <v-row>
        <v-col cols="12">
          <v-btn
            dark
            rounded
            @click="
              resetSearch();
              backToIndex();
            "
            >Buscar novamente</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
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
