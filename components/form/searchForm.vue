<template>
  <form
    :justify="'justify'"
    :align="'center'"
    @submit.prevent="searchTicketmaster"
  >
    <!-- <p>{{ api }}</p> -->
    <search-bar></search-bar>
    <search-button></search-button>
  </form>
</template>

<style lang="scss" scoped>
form {
  user-select: none;
  margin: 16px 0;
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
      result: null
    };
  },
  computed: {
    ...mapGetters({
      searchQuery: 'search/getSearchQuery',
      apiInfo: 'getApiInfo'
    })
  },
  methods: {
    ...mapActions({
      toggleSearchResults: 'search/toggleSearchResults',
      setSearchResult: 'search/setSearchResult',
      setArtistBio: 'search/setArtistBio'
    }),
    searchTicketmaster() {
      this.toggleSearchResults(false);

      if (this.searchQuery) {
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

        getArtistTicketMaster().then(tmData => {
          this.result = tmData;
          this.setSearchResult(this.result);
          this.$axios
            .get(
              `${this.apiInfo.lastFmApiUrl}/?method=artist.getinfo&artist=${this.result.name}&api_key=${this.apiInfo.lastFmApiKey}&format=json`
            )
            .then(lfData => {
              this.toggleSearchResults(true);
              this.$router.push('/busca');
              console.log('lfData', lfData);
              this.setArtistBio(lfData.data.artist.bio.content);
            });
        });
      }
    }
  }
};
</script>
