import * as types from './types'

// export const beginAjaxCall = ({commit, dispatch, state, rootState}) => {}

export const beginAjaxCall = ({commit}) => {
  commit(types.BEGIN_AJAX_CALL)
}

export const ajaxCallSuccess = ({commit}) => {
  commit(types.AJAX_CALL_SUCCESS)
}

export const ajaxCallError = ({commit}) => {
  commit(types.AJAX_CALL_ERROR)
}
