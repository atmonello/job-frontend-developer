<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>Intelipost</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <button @click="toggleSearch">Pesquisar</button>
        <p>Searched: {{ controls.searched }}</p>
      </v-col>
    </v-row>
    <v-row v-if="controls.searched">
      <nuxt-child></nuxt-child>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      controls: {
        searched: false
      }
    };
  },
  methods: {
    toggleSearch() {
      this.controls.searched = !this.controls.searched;
    }
  }
};
</script>
