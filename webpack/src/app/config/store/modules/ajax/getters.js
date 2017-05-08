// export const isLoading = (state, getters, rootState) => {}

export const isLoading = (state) => {
  return state.inProgress > 0
}
