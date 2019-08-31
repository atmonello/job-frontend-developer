/* eslint-disable import/named */
import { state as SearchState } from './search/state';
import { mutations as SearchMutations } from './search/mutations';
import { actions as SearchActions } from './search/actions';
import { getters as SearchGetters } from './search/getters';

export const state = () => ({
  ...SearchState,
  apiInfo: {}
});

export const mutations = {
  ...SearchMutations,
  storeApiInfo(state, data) {
    state.apiInfo = data;
  }
};

export const actions = {
  ...SearchActions,
  nuxtServerInit({ commit }, context) {
    commit('storeApiInfo', {
      youtubeApiKey: context.env.youtubeApiKey,
      ticketmasterApiKey: context.env.ticketmasterApiKey,
      youtubeApiUrl: context.env.youtubeApiUrl,
      ticketmasterApiUrl: context.env.ticketmasterApiUrl,
      lastFmApiKey: context.env.lastFmApiKey,
      lastFmSharedSecret: context.env.lastFmSharedSecret,
      lastFmApiUrl: context.env.lastFmApiUrl
    });
  }
};

export const getters = {
  ...SearchGetters,
  getApiInfo(state) {
    return state.apiInfo;
  }
};
