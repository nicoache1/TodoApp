import actionTypes from './actionTypes';

export function appInitialized() {
  return async (dispatch, getState) => {
    dispatch(changeAppRoot('login'));
  };
}

export function changeAppRoot(root) {
  return { type: actionTypes.ROOT_CHANGED, root };
}

export function login() {
  return async (dispatch, getState) => {
    dispatch(changeAppRoot('after-login'));
  };
}
