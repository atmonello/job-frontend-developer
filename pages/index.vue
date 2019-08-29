<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <title-page></title-page>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <search-form></search-form>
      </v-col>
    </v-row>
    <v-row v-if="showResults">
      <nuxt-child></nuxt-child>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import titlePage from '../components/titlePage';
import searchForm from '../components/searchForm';

export default {
  components: {
    searchForm,
    titlePage
  },
  computed: {
    ...mapGetters({
      showResults: 'search/getSearchResultStatus'
    })
  }
};
</script>
