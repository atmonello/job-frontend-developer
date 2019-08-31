<template>
  <v-container id="search-result" :class="{ 'open-result': showResults }">
    <v-row>
      <v-col cols="12">
        <h2 class="text-center">{{ artistTicketmasterData.name }}</h2>
      </v-col>
    </v-row>
    <artist-bio></artist-bio>
    <hr />
  </v-container>
</template>

<style lang="scss" scoped>
#search-result {
  padding: 0 2rem;
  &.open-result {
    min-height: calc(100vh - 100px);
  }
}
</style>

<script>
import { mapGetters } from 'vuex';
import artistBio from '~/components/result/artistBio';

export default {
  validate({ store }) {
    return store.state.search.searchResult != null;
  },
  components: {
    artistBio
  },
  computed: {
    ...mapGetters({
      showResults: 'search/getSearchResultStatus',
      artistTicketmasterData: 'search/getArtistTicketMasterData'
    })
  }
};
</script>
