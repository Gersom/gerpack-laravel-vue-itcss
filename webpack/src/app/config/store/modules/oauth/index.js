// IMPORTACIONES
  import * as types from './types'
  import * as getters from './getters'
  import * as actions from './actions'
  import * as keys from 'store/plugins/constantsKeys'

// VARIABLES
  let tokenDefault = { access: '', expires: 999, refresh: '' }
  let lsTmp = window.sessionStorage.getItem(keys.OAUTH_STORAGE_KEY) || false
  lsTmp = lsTmp ? JSON.parse(lsTmp) : lsTmp

// ESTADOS
  const state = {
    path: `${window.PATH}/oauth/token`,
    client: {
      id: window.CLIENT.id,
      secret: window.CLIENT.secret
    },
    token: lsTmp || tokenDefault
  }

// MUTACIONES
  const mutations = {
    [types.UPDATE_TOKEN] (state, jsonToken) {
      state.token = jsonToken
    },
    [types.REMOVE_TOKEN] (state) {
      state.token = tokenDefault
    }
  }

// EXPORTACION
  export default {
    state,
    mutations,
    actions,
    getters
  }
