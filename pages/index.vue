<template>
  <main>
    <section id="search-form" :class="{ 'open-result': showResults }">
      <title-page></title-page>
      <search-form v-if="!showResults"></search-form>
    </section>
    <section v-if="showResults" id="search-result">
      <v-container :class="{ 'open-result': showResults }">
        <v-row>
          <v-col cols="12">
            <h2 class="text-center">{{ artistTicketmasterData.name }}</h2>
          </v-col>
        </v-row>
        <artist-bio></artist-bio>
        <hr />
        <videos-list :videos="videosList"></videos-list>
      </v-container>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  max-height: 100vh;

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
      position: fixed;
      top: 0;
      z-index: 2;
      width: 100%;
    }
  }

  #search-result {
    padding: 0 2rem;
    min-height: calc(100vh - 100px);
    padding-top: 100px;
  }
}
</style>

<script>
import { mapGetters } from 'vuex';
import titlePage from '../components/titlePage';
import searchForm from '../components/form/searchForm';
import artistBio from '~/components/result/artistBio';
import videosList from '~/components/result/videosList';

export default {
  components: {
    searchForm,
    titlePage,
    artistBio,
    videosList
  },
  computed: {
    ...mapGetters({
      showResults: 'search/getSearchResultStatus',
      apiInfo: 'getApiInfo',
      artistTicketmasterData: 'search/getArtistTicketMasterData',
      videosList: 'search/getVideosList'
    })
  },
  mounted() {
    window.gapi.load('client', () => {
      window.gapi.client.init({
        apiKey: this.apiInfo.youtubeApiKey
      });
      window.gapi.client.load('youtube', 'v3', function() {
        // yt api is ready
      });
    });
  }
};
</script>
