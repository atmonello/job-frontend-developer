<template>
  <main>
    <section id="search-form" :class="{ 'open-result': showResults }">
      <title-page></title-page>
      <search-form v-if="!showResults"></search-form>
    </section>

    <nuxt-child></nuxt-child>
  </main>
</template>

<style lang="scss" scoped>
main {
  max-height: 100vh;
  overflow: hidden;

  #search-form {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $inteli-green; //hsl(72, 100%, 25%);
    height: 100vh;
    transition: all 500ms ease;
    flex-direction: column;

    &.open-result {
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
import searchForm from '../components/form/searchForm';

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
