<template>
  <form
    :justify="'justify'"
    :align="'center'"
    :class="{ 'no-artist': noArtist }"
    @submit.prevent="searchArtist"
  >
    <!-- <p>{{ api }}</p> -->
    <search-bar></search-bar>
    <search-button></search-button>
    <span v-if="loadingSearch" class="loading-icon">
      <v-icon x-large>mdi-loading</v-icon>
    </span>
    <v-snackbar v-model="noArtist" :timeout="3000"
      >Não encontrado! Tente novamente.</v-snackbar
    >
  </form>
</template>

<style lang="scss" scoped>
form {
  user-select: none;
  margin: 16px 0;
  position: relative;

  &.no-artist {
    animation: no-artist;
    animation-duration: 0.25s;
    animation-iteration-count: 3;
    animation-fill-mode: forwards;
  }

  .loading-icon {
    animation: loading-icon;
    animation-duration: 1s;
    // animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    display: inline-block;
    position: absolute;
    right: -60px;
    top: 0;
    display: block;
    width: 50px;
    height: 50px;
  }

  @keyframes no-artist {
    0% {
      margin-right: 0;
      pointer-events: none;
    }
    25% {
      margin-right: 15px;
      pointer-events: none;
    }
    75% {
      margin-right: -15px;
      pointer-events: none;
    }
    100% {
      margin-right: 0;
    }
  }

  @keyframes loading-icon {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>

<script>
import { mapGetters, mapActions } from 'vuex';
import searchButton from './searchButton';
import searchBar from './searchBar';

export default {
  components: {
    searchButton,
    searchBar
  },
  data() {
    return {
      result: null,
      noArtist: false
    };
  },
  computed: {
    ...mapGetters({
      searchQuery: 'search/getSearchQuery',
      apiInfo: 'getApiInfo',
      loadingSearch: 'search/getLoadingSearch'
    })
  },
  methods: {
    ...mapActions({
      toggleSearchResults: 'search/toggleSearchResults',
      setSearchResult: 'search/setSearchResult',
      setArtistBio: 'search/setArtistBio',
      setVideosList: 'search/setVideosList',
      setLoadingSearch: 'search/setLoadingSearch'
    }),
    searchNoArtist() {
      this.noArtist = true;
      this.setLoadingSearch(false);
    },
    searchArtist() {
      this.toggleSearchResults(false);

      if (this.searchQuery) {
        this.setLoadingSearch(true);
        const getArtistTicketMaster = () =>
          new Promise((resolve, reject) => {
            this.$axios
              .get(
                `${this.apiInfo.ticketmasterApiUrl}/attractions.json?keyword=${this.searchQuery}&size=1&apikey=${this.apiInfo.ticketmasterApiKey}`
              )
              .then(response => {
                resolve(response.data._embedded.attractions[0]);
              })
              .catch(error => {
                reject(error);
              });
          });

        getArtistTicketMaster()
          .then(tmData => {
            this.result = tmData;
            this.setSearchResult(this.result);
            this.$axios
              .get(
                `${this.apiInfo.lastFmApiUrl}/?method=artist.getinfo&artist=${this.result.name}&api_key=${this.apiInfo.lastFmApiKey}&format=json`
              )
              .then(lfData => {
                this.setArtistBio(lfData.data.artist.bio.content);

                const youtubeRequest = window.gapi.client.youtube.search.list({
                  part: 'snippet',
                  type: 'video',
                  q: lfData.data.artist.name,
                  maxResults: 10,
                  order: 'viewCount'
                });

                youtubeRequest.execute(response => {
                  this.setVideosList(response.items);
                  this.toggleSearchResults(true);
                  this.setLoadingSearch(false);
                });
              })
              .catch(() => {
                this.searchNoArtist();
              });
          })
          .catch(() => {
            this.searchNoArtist();
          });
      }
    }
  }
};
</script>
