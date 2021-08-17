export default {
  namespaced: true,

  state: () => ({
    name: 'Mustafa',
  }),

  getters: {
    getUserName: (state) => state.name,
  },

  mutations: {
    SET_NAME(state, payload: string) {
      state.name = payload
    },
  },

  actions: {
    saveName({ commit }, data) {
      commit('SET_NAME', data)
    },
  },
}
