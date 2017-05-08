// import * as keys from './constantsKeys'
import * as oauth from 'store/modules/oauth/types'

export function notificationPlugin (store) {
  store.subscribe(({type}, {
    oauth: {token}
  }) => {
    switch (type) {
      case oauth.UPDATE_TOKEN:
        window.toastr['success']('Bienvenido a Zicomarket')
        break
      case oauth.REMOVE_TOKEN:
        window.toastr['success']('Esperamos que vuelva pronto', 'Zicomarket')
        break
      default:
        //
    }
  })
}
