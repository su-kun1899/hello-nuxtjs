export const state = () => ({
  hogeFromStore: 'Hello, Vuex!'
})

export const mutations = {
  setHogeFromStore(state, value) {
    state.hogeFromStore = value
  }
}

export const actions = {
  writeHoge(context, value) {
    context.commit('setHogeFromStore', value)
  }
}
