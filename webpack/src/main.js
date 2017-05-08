// import styles || importacion de estilos
require('@/styles/main.scss')
require('@/styles/main.styl')

// global axios configuration
import axios from 'axios'
import { camelizeKeys, decamelizeKeys } from 'humps'
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.transformRequest = (data) => {
  return JSON.stringify(decamelizeKeys(data))
}
axios.defaults.transformResponse = (data) => {
  switch (typeof data) {
    case 'object':
      return camelizeKeys(data)
    case 'string':
      return camelizeKeys(JSON.parse(data))
  }
}

// global toastr configuration
window.toastr = require('toastr')
window.toastr.options = {
  closeButton: true,
  debug: false,
  extendedTimeOut: '1000',
  hideDuration: '1000',
  hideEasing: 'linear',
  hideMethod: 'fadeOut',
  newestOnTop: true,
  onclick: null,
  positionClass: 'toast-top-right',
  preventDuplicates: false,
  progressBar: true,
  showDuration: '300',
  showEasing: 'swing',
  showMethod: 'fadeIn',
  timeOut: '5000'
}

// Mounted Vue app || Aplicación Vue montada
import { app } from '@/app'
app.$mount('#root')
