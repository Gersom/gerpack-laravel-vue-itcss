import GerButton from 'components/defaults/GerButton'
import GerLink from 'components/defaults/GerLink'
import GerLoading from 'components/defaults/GerLoading'
import GerUserConfig from 'components/defaults/GerUserConfig'

export default function registerComponents (Vue) {
  Vue.component('ger-button', GerButton)
  Vue.component('ger-link', GerLink)
  Vue.component('ger-loading', GerLoading)
  Vue.component('ger-user-config', GerUserConfig)
}
