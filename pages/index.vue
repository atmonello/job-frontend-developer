<template>
  <v-container fluid>
    <v-row>
      <v-col cols="6">
        <h1>Intelipost</h1>
      </v-col>
      <v-col cols="6">
        <p>{{ api }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  asyncData(ctx) {
    return {
      api: {
        youtubeKey: ctx.env.youtubeApiKey,
        ticketmasterKey: ctx.env.ticketmasterApiKey
      }
    };
  }
};
</script>
