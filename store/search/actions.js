const actions = {
  toggleSearchResults({ commit }, data) {
    commit('toggleSearchResults', data);
  },
  setSearchQuery({ commit }, data) {
    commit('setSearchQuery', data);
  },
  setSearchResult({ commit }, data) {
    commit('setSearchResult', data);
  }
};

export default actions;
