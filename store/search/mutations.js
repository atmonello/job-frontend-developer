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
  setVideosList(state, data) {
    state.videosList = data;
  },
  setLoadingSearch(state, data) {
    state.loadingSearch = data;
  },
  resetSearch(state) {
    state.showResult = false;
    state.query = '';
    state.searchResult = null;
    state.artistBio = '';
    state.videosList = [];
  }
};

export default mutations;
