<template>
  <li v-if="type !== 'musicbrainz'">
    <a :href="info" target="_blank" :title="getLinkTitle(type)">
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
          alternate: 'wikipedia',
          linkTitle: 'Wikipedia'
        },
        {
          original: 'twitter',
          alternate: 'twitter-box',
          linkTitle: 'Twitter'
        },
        {
          original: 'facebook',
          alternate: 'facebook-box',
          linkTitle: 'Facebook'
        },
        {
          original: 'lastfm',
          alternate: 'lastfm',
          linkTitle: 'Last.fm'
        },
        {
          original: 'instagram',
          alternate: 'instagram',
          linkTitle: 'Instagram'
        },
        {
          original: 'itunes',
          alternate: 'itunes',
          linkTitle: 'iTunes'
        },
        {
          original: 'homepage',
          alternate: 'link-box-variant',
          linkTitle: 'Site'
        }
      ]
    };
  },
  methods: {
    getAlternateIcon(icon) {
      return this.swapIcons.filter(item => item.original === icon)[0].alternate;
    },
    getLinkTitle(icon) {
      return this.swapIcons.filter(item => item.original === icon)[0].linkTitle;
    }
  }
};
</script>
