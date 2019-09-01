const actions = {
  toggleSearchResults({ commit }, data) {
    commit('toggleSearchResults', data);
  },
  setSearchQuery({ commit }, data) {
    commit('setSearchQuery', data);
  },
  setSearchResult({ commit }, data) {
    commit('setSearchResult', data);
  },
  setArtistBio({ commit }, data) {
    commit('setArtistBio', data);
  },
  setVideosList({ commit }, data) {
    commit('setVideosList', data);
  },
  setLoadingSearch({ commit }, data) {
    commit('setLoadingSearch', data);
  },
  resetSearch({ commit }) {
    commit('resetSearch');
  }
};

export default actions;
