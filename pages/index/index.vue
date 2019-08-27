<template>
  <div>
    <h2>Result</h2>
    <p>{{ result }}</p>
  </div>
</template>

<style lang="scss"></style>

<script>
export default {
  data() {
    return {
      result: null
    };
  },
  asyncData(ctx) {
    const api = {
      youtubeApiKey: ctx.env.youtubeApiKey,
      ticketmasterApiKey: ctx.env.ticketmasterApiKey,
      youtubeApiUrl: ctx.env.youtubeApiUrl,
      ticketmasterApiUrl: ctx.env.ticketmasterApiUrl
    };
    return {
      api
    };
  },
  created() {
    this.$axios
      .get(
        `${this.api.ticketmasterApiUrl}/events.json?size=1&apikey=${this.api.ticketmasterApiKey}`
      )
      .then(response => {
        this.result = response.data._embedded.events;
      })
      .catch(error => {
        this.result = error.data;
      });
  }
};
</script>
