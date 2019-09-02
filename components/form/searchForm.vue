<template>
  <form
    :justify="'justify'"
    :align="'center'"
    :class="{ 'no-artist': noArtist }"
    @submit.prevent="searchArtist"
  >
    <div id="search-form-item--bar">
      <!-- <input
        type="text"
        placeholder="Digite um artista"
        @input="updateSearchQuery($event.target.value)"
      /> -->
      <v-text-field
        light
        append-icon="mdi-magnify"
        messages="Digite um artista"
        @input.native="updateSearchQuery($event.target.value)"
      ></v-text-field>
    </div>
    <div id="search-form-item--button">
      <v-btn dark large rounded depressed :disabled="!searchQuery" type="submit"
        >Pesquisar</v-btn
      >
    </div>
    <span class="loading-icon">
      <v-icon v-if="loadingSearch" x-large>mdi-loading</v-icon>
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

  #search-form-item {
    &--bar,
    &--button {
      margin: 8px 0;

      @media screen and (min-width: 601px) {
        display: inline-block;
        margin: 8px;
      }
    }
  }

  &.no-artist {
    animation: no-artist;
    animation-duration: 0.15s;
    animation-iteration-count: 2;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
  }

  .loading-icon {
    animation: loading-icon;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    display: inline-block;
    display: block;
    width: 50px;
    height: 50px;
    position: absolute;

    @media screen and (max-width: 600px) {
      margin: auto;
      right: 0;
      left: 0;
    }

    @media screen and (min-width: 601px) {
      right: -60px;
      bottom: 5px;
    }
  }

  input {
    background-color: $background-input;
    border-bottom: 2px solid $inteli-green;
    color: $color-font-main;
    padding: 8px;
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

export default {
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
      setLoadingSearch: 'search/setLoadingSearch',
      setSearchQuery: 'search/setSearchQuery',
      updateSearchQuery: 'search/setSearchQuery'
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
            const tmURL = `${
              this.apiInfo.ticketmasterApiUrl
            }/attractions.json?keyword=${this.searchQuery.trim()}&size=1&apikey=${
              this.apiInfo.ticketmasterApiKey
            }`;
            this.$axios
              .get(tmURL)
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
            const lfURL = `${this.apiInfo.lastFmApiUrl}/?method=artist.getinfo&artist=${this.result.name}&api_key=${this.apiInfo.lastFmApiKey}&format=json`;
            this.$axios
              .get(lfURL)
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
