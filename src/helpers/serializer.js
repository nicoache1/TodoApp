export const deserializeItems = (todos) => {
  return todos.map((todo) => {
    return deserializeItem(todo);
  });
};

export const deserializeItem = (todo) => {
  return { ...todo, id: getIdByUrl(todo.url) };
};

const getIdByUrl = (url) => {
  const urlSplited = url.split('/');
  return urlSplited[urlSplited.length - 1];
};

