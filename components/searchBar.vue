<template>
  <input
    type="text"
    placeholder="Digite um artista"
    @input="updateSearchQuery($event.target.value)"
  />
</template>

<style lang="scss" scoped>
input {
  background-color: $background-input;
  border-bottom: 2px solid $inteli-green;
  display: inline-block;
  padding: 8px;
  color: $background-page;
}
</style>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions({
      updateSearchQuery: 'search/setSearchQuery'
    })
  }
};
</script>
