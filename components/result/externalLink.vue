<template>
  <li v-if="type !== 'musicbrainz'">
    <a :href="info">
      <v-icon x-large>{{ `mdi-${getAlternateIcon(type)}` }}</v-icon>
    </a>
    <!-- <span>{{ info }}</span> -->
  </li>
</template>

<style lang="scss" scoped>
li {
  list-style-type: none;
  display: inline-block;
  a {
    color: transparent;
  }
}
</style>

<script>
export default {
  props: {
    info: {
      required: true,
      type: String
    },
    type: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      swapIcons: [
        {
          original: 'wiki',
          alternate: 'wikipedia'
        },
        {
          original: 'twitter',
          alternate: 'twitter-box'
        },
        {
          original: 'facebook',
          alternate: 'facebook-box'
        },
        {
          original: 'lastfm',
          alternate: 'lastfm'
        },
        {
          original: 'instagram',
          alternate: 'instagram'
        },
        {
          original: 'itunes',
          alternate: 'itunes'
        },
        {
          original: 'homepage',
          alternate: 'link-box-variant'
        }
      ]
    };
  },
  methods: {
    getAlternateIcon(icon) {
      return this.swapIcons.filter(item => item.original === icon)[0].alternate;
    }
  }
};
</script>
