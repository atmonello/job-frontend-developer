<template>
  <div class="artist">
    <v-row>
      <v-col xs="12" sm="9">
        <div class="artist-bio" :class="{ 'show-full-bio': toggleFullBio }">
          <div class="artist-bio-text">
            {{ artistBio }}
          </div>
          <div v-if="!toggleFullBio" class="artist-bio-expand">
            <v-btn outlined rounded @click="showFullBio">Ler mais</v-btn>
          </div>
        </div>
      </v-col>
      <v-col v-if="showResults" class="artist-links" xs="12" sm="3">
        <div class="artist-links--list">
          <h6>Links</h6>
          <ul>
            <external-link
              v-for="(item, key, index) in artistTicketmasterData.links"
              :key="index"
              :type="key"
              :info="item"
            ></external-link>
          </ul>
        </div>
        <div class="artist-links--genre">
          <h6>Gênero</h6>
          <p>{{ artistTicketmasterData.genre }}</p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped>
.artist {
  margin-bottom: 16px;
  &-bio {
    overflow: hidden;
    height: 150px;
    line-height: 1.75;
    position: relative;
    padding: 0 24px 16px;

    &.show-full-bio {
      overflow-y: auto;
      height: 450px;
      transition: height 0.5s ease;
    }

    &-expand {
      position: absolute;
      z-index: 1;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      background: linear-gradient(0deg, white, white, transparent);
      height: 60%;
      display: flex;
      justify-content: center;
      align-items: flex-end;
    }
  }
  &-links {
    ul {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      margin-bottom: 16px;
    }
    p {
      text-align: center;
    }
    @media screen and (max-width: 600px) {
      text-align: center;
      &--list,
      &--genre {
        display: inline-block;
      }
    }
  }
}
</style>

<script>
import { mapGetters } from 'vuex';
import externalLink from '~/components/result/externalLink';

export default {
  components: {
    externalLink
  },
  data() {
    return {
      toggleFullBio: false
    };
  },
  computed: {
    ...mapGetters({
      showResults: 'search/getSearchResultStatus',
      artistTicketmasterData: 'search/getArtistTicketMasterData',
      artistBio: 'search/getArtistBio'
    })
  },
  methods: {
    showFullBio() {
      this.toggleFullBio = !this.toggleFullBio;
    }
  }
};
</script>
