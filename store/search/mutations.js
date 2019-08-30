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
  resetSearch(state) {
    state.searchResult = null;
    state.query = '';
    state.showResult = false;
  }
};

export default mutations;
