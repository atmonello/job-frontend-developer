<template>
  <div>
    <h2>Result</h2>
    <p>{{ artistTicketmasterData }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      searchResult: 'search/searchResult',
      artistTicketmasterData: 'search/getArtistTicketMasterData'
    })
  }
};
</script>
