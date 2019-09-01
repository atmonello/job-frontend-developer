<template>
  <v-app dark>
    <v-container>
      <v-row>
        <v-col>
          <h4 v-if="error.statusCode === 404">
            {{ pageNotFound }}
          </h4>
          <h4 v-else-if="!hasSearchResult">
            {{ emptySearchResult }}
          </h4>
          <h4 v-else>
            {{ otherError }}
          </h4>
          <NuxtLink to="/">
            Voltar
          </NuxtLink>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: '404 Não encontrado',
      otherError: 'Ocorreu um erro',
      emptySearchResult: 'Faça uma nova busca'
    };
  },
  asyncData({ store }) {
    const hasSearchResult = store.state.search.searchResult != null;
    return { hasSearchResult };
  },
  layout: 'empty',
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title
    };
  }
};
</script>

<style scoped>
.container {
  text-align: center;
}
</style>
