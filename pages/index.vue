<template>
  <main>
    <aside :class="{ openResult: showResults }">
      <title-page></title-page>
      <search-form v-if="!showResults"></search-form>
    </aside>

    <v-container>
      <v-row>
        <v-col v-if="showResults" cols="9">
          <nuxt-child></nuxt-child>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<style lang="scss" scoped>
main {
  max-height: 100vh;
  overflow: hidden;
  aside {
    background-color: $inteli-green; //hsl(72, 100%, 25%);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    transition: all 500ms ease;
    flex-direction: column;

    &.openResult {
      height: 100px;
      transition: all 500ms ease;
      flex-direction: row;
    }
  }
}
</style>

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
