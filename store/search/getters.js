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
    const artist = state.searchResult;

    return {
      name: artist.name,
      id: artist.id,
      genre: artist.classifications[0].genre.name,
      homepage: artist.externalLinks.homepage[0].url,
      facebook: artist.externalLinks.facebook[0].url,
      twitter: artist.externalLinks.twitter[0].url,
      instagram: artist.externalLinks.instagram[0].url
    };
  }
};

export default getters;
