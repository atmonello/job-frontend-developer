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
      genre: artist.classifications[0].genre.name || '',
      homepage: artist.externalLinks
        ? artist.externalLinks.homepage[0].url
        : 'Não informado',
      facebook: artist.externalLinks
        ? artist.externalLinks.facebook[0].url
        : 'Não informado',
      twitter: artist.externalLinks
        ? artist.externalLinks.twitter[0].url
        : 'Não informado',
      instagram: artist.externalLinks
        ? artist.externalLinks.instagram[0].url
        : 'Não informado'
    };
  }
};

export default getters;
