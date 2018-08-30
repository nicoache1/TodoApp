export const deserializeItems = (todos) => {
  return todos.map((todo) => {
    return deserializeItem(todo);
  });
};

export const deserializeItem = (todo) => {
  return {
    completed: todo.completed,
    id: getIdByUrl(todo.url),
    url: todo.url,
    title: todo.title,
  };
};

const getIdByUrl = (url) => {
  const urlSplited = url.split('/');
  return urlSplited[urlSplited.length - 1];
};

