const getters = {
  getSearchResultStatus(state) {
    return state.showResult;
  },
  getSearchResult(state) {
    return state.searchResult;
  },
  getSearchQuery(state) {
    return state.query;
  },
  getArtistTicketMasterData(state) {
    const artist = {};
    const result = state.searchResult;

    artist.name = result.name;
    artist.id = result.id;

    if (result.classifications) {
      artist.genre = result.classifications[0].genre.name;
    }

    if (result.externalLinks) {
      artist.links = {};
      Object.keys(result.externalLinks).map(key => {
        artist.links[key] = result.externalLinks[key][0].url;
      });
    }

    return artist;
  }
};

export default getters;
