import actionTypes from './actionTypes';
import ToDoController from '../networking/controllers/ToDoController';
import strings from '../localization/en/strings';
import { deserializeItems, deserializeItem } from '../helpers/deserializer';

export const getTodo = () => {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const response = await ToDoController.getToDo();
      dispatch(successGetTodo(deserializeItems(response.data)));
    } catch (error) {
      dispatch(failureGetToDo(strings.apiError));
    }
  };
};

export const addTodo = (todo) => {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const response = await ToDoController.sendToDo(todo);
      dispatch(successAddTodo(deserializeItem(response.data)));
    } catch (error) {
      dispatch(failureAddToDo(strings.apiError));
    }
  };
};

export const toggleTodo = (item) => {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const body = { ...item, completed: !item.completed };
      const response = await ToDoController.patchToDo(item.id, body);
      dispatch(successUpdateTodo(deserializeItem(response.data)));
    } catch (error) {
      dispatch(failureUpdateToDo(strings.apiError));
    }
  };
};

export const clearAllDone = (items) => {
  return (dispatch) => {
    items.forEach(async (todo) => {
      try {
        const response = await ToDoController.deleteToDo(todo.id);
        dispatch(successDeleteTodo(deserializeItem(response.data)));
      } catch (error) {
        dispatch(failureDeleteToDo(strings.apiError));
      }
    });
  };
};

const successDeleteTodo = todo => ({
  type: actionTypes.SUCCESS_DELETE_TODO,
  payload: todo,
});

const successGetTodo = todo => ({
  type: actionTypes.SUCCESS_GET_TODO,
  payload: todo,
});

const successAddTodo = todo => ({
  type: actionTypes.SUCCESS_ADD_TODO,
  payload: todo,
});

const successUpdateTodo = todo => ({
  type: actionTypes.SUCCESS_UPDATE_TODO,
  payload: todo,
});

const failureUpdateToDo = error => ({
  type: actionTypes.FAILURE_ADD_TODO,
  payload: error,
});

const failureDeleteToDo = error => ({
  type: actionTypes.FAILURE_DELETE_TODO,
  payload: error,
});

const failureAddToDo = error => ({
  type: actionTypes.FAILURE_ADD_TODO,
  payload: error,
});

const failureGetToDo = error => ({
  type: actionTypes.FAILURE_GET_TODO,
  payload: error,
});

const showLoading = () => ({
  type: actionTypes.SHOW_SPINNER,
});
