import GerButton from 'components/GerButton'
import GerLink from 'components/GerLink'
import GerLoading from 'components/GerLoading'
import GerUserConfig from 'components/GerUserConfig'

export default function registerComponents (Vue) {
  Vue.component('ger-button', GerButton)
  Vue.component('ger-link', GerLink)
  Vue.component('ger-loading', GerLoading)
  Vue.component('ger-user-config', GerUserConfig)
}
