<template>
  <form :justify="'justify'" :align="'center'" @submit.prevent>
    <search-bar></search-bar>
    <search-button></search-button>
  </form>
</template>

<script>
import searchButton from './searchButton';
import searchBar from './searchBar';

export default {
  components: {
    searchButton,
    searchBar
  }
};
</script>
