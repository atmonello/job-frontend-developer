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
  getArtistBio(state) {
    return state.artistBio;
  },
  getArtistTicketMasterData(state) {
    if (!state.searchResult) {
      return null;
    }
    const artist = {};
    const result = state.searchResult;

    artist.name = result.name;
    artist.id = result.id;

    if (result.classifications) {
      artist.genre = result.classifications[0].genre.name;
    }

    if (result.externalLinks) {
      artist.links = {};
      const validLinks = ['facebook', 'twitter', 'homepage', 'instagram'];

      const removeObsoleteLinks = Object.keys(result.externalLinks).filter(
        key => {
          return validLinks.includes(key);
        }
      );

      Object.keys(result.externalLinks).map(key => {
        if (removeObsoleteLinks.includes(key)) {
          artist.links[key] = result.externalLinks[key][0].url;
        }
      });
    }

    return artist;
  },
  getVideosList(state) {
    const _videos = [];

    if (state.videosList) {
      state.videosList.map(item => {
        _videos.push(item.snippet);
      });
    }

    return _videos;
  }
};

export default getters;
