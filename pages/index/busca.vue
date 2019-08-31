<template>
  <v-container id="search-result" :class="{ 'open-result': showResults }">
    <v-row>
      <v-col cols="12">
        <h2 class="text-center">{{ artistTicketmasterData.name }}</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="9">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor,
        voluptate cupiditate! Velit praesentium dignissimos, labore cum
        accusantium tempore dolore quibusdam, exercitationem tempora illum
        voluptates autem ut a repellendus? Suscipit, excepturi? Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Voluptatum, perspiciatis!
        Tenetur doloremque vero quis sed, id repudiandae cupiditate odit,
        inventore nemo dolorum, ipsum quam impedit qui voluptatem fugit amet
        neque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
        culpa quisquam debitis repellat vel aut iste neque tempore incidunt
        pariatur. Eligendi enim blanditiis voluptas qui ut, aut tenetur harum
        nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aliquam veniam exercitationem voluptates autem. Illo ad non eos vero
        cumque repellendus maxime, dolor, quisquam aperiam nobis praesentium,
        sapiente beatae quia sint.
      </v-col>
      <v-col v-if="showResults" class="artist-links" cols="3">
        <h6>Links</h6>
        <ul>
          <external-link
            v-for="(item, key, index) in artistTicketmasterData.links"
            :key="index"
            :type="key"
            :info="item"
          ></external-link>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
#search-result {
  // display: flex;
  // justify-content: center;
  // align-items: flex-start;
  // flex-direction: column;
  padding: 0 2rem;

  .artist-links {
    ul {
      display: flex;
      justify-content: space-around;
    }
  }

  &.open-result {
    min-height: calc(100vh - 100px);
  }
}
</style>

<script>
import { mapGetters } from 'vuex';
import externalLink from '~/components/result/externalLink';

export default {
  validate({ store }) {
    return store.state.search.searchResult != null;
  },
  components: {
    externalLink
  },
  computed: {
    ...mapGetters({
      showResults: 'search/getSearchResultStatus',
      searchResult: 'search/searchResult',
      artistTicketmasterData: 'search/getArtistTicketMasterData'
    })
  }
};
</script>
