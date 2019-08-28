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
        <p>Searched: {{ controls.searched }}</p>
      </v-col>
    </v-row>
    <v-row v-if="controls.searched">
      <nuxt-child></nuxt-child>
    </v-row>
  </v-container>
</template>

<script>
import titlePage from '../components/titlePage';
import searchForm from '../components/searchForm';
export default {
  components: {
    searchForm,
    titlePage
  },
  data() {
    return {
      controls: {
        searched: false
      }
    };
  },
  methods: {
    toggleSearch() {
      this.controls.searched = !this.controls.searched;
    }
  }
};
</script>
