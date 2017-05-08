// /* eslint-disable */

export const tokenState = (state, getters, rootState) => {
  let empty = true
  for (empty in state.token) {
    empty = false
    break
  }
  if (!empty) {
    if (state.token.access) {
      return state.token.access.length > 50
    } else {
      return false
    }
  } else {
    return false
  }
}

export const accessToken = (state, getters, rootState) => {
  return state.token.access
}
