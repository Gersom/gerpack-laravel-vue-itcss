// IMPORT MODULES NPM
  import axios from 'axios'

// IMPORT TYPES VAR
  import * as ajax from 'store/modules/ajax/types'
  import * as typesLocal from './types'
  let types = Object.assign({}, ajax, typesLocal)

// FUNCTIONS OF ACTIONS
  // export const createdToken = ({commit, dispatch, state, rootState}, jsonForm) => {
  export const createdToken = ({ commit, state }, jsonForm) => {
    commit(types.BEGIN_AJAX_CALL)

    axios({
      method: 'post',
      url: state.path,
      data: {
        'client_id': state.client.id,
        'client_secret': state.client.secret,
        'grant_type': 'password',
        'password': jsonForm.password,
        'scope': '',
        'username': jsonForm.username
      },
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      transformRequest: (data) => {
        return JSON.stringify(data)
      }
    })
    .then(({ data }) => {
      commit(types.UPDATE_TOKEN, {
        access: data.accessToken,
        expires: data.expiresIn,
        refresh: data.refreshToken
      })
      commit(types.AJAX_CALL_SUCCESS)
    })
    .catch(({response}) => {
      if (response.status === 401) {
        window.toastr['error']('Lo sentimos, el nombre de usuario y/o la contraseña incorrectos.', 'Zicomarket')
      }
      commit(types.AJAX_CALL_ERROR)
    })
  }

  export const updateToken = ({ commit, state }, jsonForm) => {
    commit(types.BEGIN_AJAX_CALL)

    axios({
      method: 'post',
      url: state.path,
      data: {
        'client_id': state.client.id,
        'client_secret': state.client.secret,
        'grant_type': 'refresh_token',
        'scope': '',
        'refresh_token': state.token.refresh
      }
    })
    .then(({ data }) => {
      commit(types.UPDATE_TOKEN, {
        access: data.accessToken,
        expires: data.expiresIn,
        refresh: data.refreshToken
      })
      commit(types.AJAX_CALL_SUCCESS)
    })
    .catch(() => {
      commit(types.AJAX_CALL_ERROR)
    })
  }

  export const removeToken = ({ commit }) => {
    commit(types.REMOVE_TOKEN)
  }
