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
      setSearchResult: 'search/setSearchResult'
    }),
    searchTicketmaster() {
      this.toggleSearchResults(false);
      this.$axios
        .get(
          `${this.apiInfo.ticketmasterApiUrl}/attractions.json?keyword=${this.searchQuery}&size=1&apikey=${this.apiInfo.ticketmasterApiKey}`
        )
        .then(response => {
          this.toggleSearchResults(true);
          this.result = response.data._embedded.attractions[0];
          this.setSearchResult(this.result);
        })
        .catch(error => {
          this.result = error.data;
        });
    }
  }
};
</script>
