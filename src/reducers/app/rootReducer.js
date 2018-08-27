import actionTypes from '../actions/actionTypes';
import screens from '../helpers/screens';

const initialState = {
  root: screens.TODO_LIST_SCREEN,
};

const root = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.ROOT_CHANGED:
      return state.merge({
        root: action.root,
      });
    default:
      return state;
  }
};

export default root;
