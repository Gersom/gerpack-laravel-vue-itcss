import * as keys from './constantsKeys'
import * as oauth from 'store/modules/oauth/types'

export function sessionStoragePlugin (store) {
  store.subscribe(({type}, {
    oauth: {token}
  }) => {
    switch (type) {
      case oauth.UPDATE_TOKEN:
      case oauth.REMOVE_TOKEN:
        window.sessionStorage.setItem(keys.OAUTH_STORAGE_KEY, JSON.stringify(token))
        break
      default:
        //
    }
  })
}
