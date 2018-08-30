import actionTypes from './actionTypes';

const initialState = {
  toDos: [],
  loading: false,
  error: null,
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SUCCESS_ADD_TODO:
      return {
        ...state,
        loading: false,
        error: null,
        toDos: [...state.toDos, action.payload],
      };
    case actionTypes.SUCCESS_GET_TODO:
      return {
        ...state,
        loading: false,
        error: null,
        toDos: [...state.toDos, ...action.payload],
      };
    case actionTypes.SUCCESS_UPDATE_TODO:
      return {
        ...state,
        loading: false,
        error: null,
        toDos: handleUpdateTodo(state.toDos, action.payload),
      };
    case actionTypes.SUCCESS_DELETE_TODO:
      return {
        ...state,
        loading: false,
        error: null,
        toDos: handleDeleteTodo(state.toDos, action.payload),
      };
    default:
      return state;
  }
};

const handleDeleteTodo = (toDos, todoToDelete) => {
  const newTodos = [...toDos];
  return newTodos.filter(todo => todoToDelete.url !== todo.url);
};

const handleUpdateTodo = (toDos, todoUpdated) => {
  const newTodos = toDos.map((todo) => {
    if (todo.url === todoUpdated.url) {
      return todoUpdated;
    }
    return todo;
  });
  return newTodos;
};


export default globalReducer;
