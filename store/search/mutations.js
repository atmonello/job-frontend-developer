const mutations = {
  toggleSearchResults(state, data) {
    state.showResult = data;
  },
  setSearchQuery(state, data) {
    state.query = data;
  },
  setSearchResult(state, data) {
    state.searchResult = data;
  }
};

export default mutations;
