<template>
  <v-btn dark large rounded depressed :disabled="!searchQuery" type="submit"
    >Pesquisar</v-btn
  >
</template>

<style lang="scss" scoped>
button {
  display: inline-block;
}
</style>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      searchQuery: 'search/getSearchQuery'
    })
  }
};
</script>
