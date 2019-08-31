const mutations = {
  toggleSearchResults(state, data) {
    state.showResult = data;
  },
  setSearchQuery(state, data) {
    state.query = data;
  },
  setSearchResult(state, data) {
    state.searchResult = data;
  },
  setArtistBio(state, data) {
    state.artistBio = data;
  },
  resetSearch(state) {
    state.showResult = false;
    state.query = '';
    state.searchResult = null;
    state.artistBio = '';
  }
};

export default mutations;
