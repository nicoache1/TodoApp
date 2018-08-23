import { observable, action, toJS } from 'mobx';
import ToDoController from '../../../networking/controllers/ToDoController';
import strings from '../../../localization/en/strings';
import Utils from '../../../helpers/Utils';

class ObservableTodoStore {
  @observable items = [];
  @observable error = null;

  @action
  clearAllDone = () => {
    const { generalError } = strings;
    const itemsToRemove = this.getToDosDone();
    itemsToRemove.forEach(async (toDoDone) => {
      try {
        const response = await ToDoController.deleteToDo(toDoDone.id);
        this.removeToDo(response.data);
      } catch (error) {
        this.error = generalError;
      }
    });
  }

  getToDosDone = () => {
    return this.items.filter(element => element.completed === true);
  }

  @action
  addToDo = (newToDo) => {
    const id = Utils.getId(newToDo.url);
    const toDoWithId = { ...newToDo, id };
    this.items.push(toDoWithId);
  }

  @action
  validateToDo = (title) => {
    const { emptyTextOrDescription } = strings;
    this.error = null;
    if (title.length === 0) {
      this.error = emptyTextOrDescription;
    }
    return title.length !== 0;
  }

  @action
  sendToDo = async (toDoTitle) => {
    const { generalError } = strings;
    try {
      const response = await ToDoController.sendToDo(toDoTitle);
      this.addToDo(response.data);
    } catch (error) {
      this.error = generalError;
    }
  }

  @action
  getItems = async () => {
    const { generalError } = strings;
    try {
      const response = await ToDoController.getToDo();
      const newItems = response.data;
      newItems.forEach((toDo) => {
        this.addToDo(toDo);
      });
    } catch (error) {
      this.error = generalError;
    }
  }

  @action
  handleToggle = async (id) => {
    const { generalError } = strings;
    try {
      const toDo = toJS(this.items.find(element => element.id === id));
      const response = await ToDoController.patchToDo(id, toDo);
      this.toggleElement(response.data);
    } catch (error) {
      this.error = generalError;
    }
  }

  @action
  toggleElement = (toDo) => {
    const toDoToToggle = this.items.find(element => element.url === toDo.url);
    toDoToToggle.completed = !toDoToToggle.completed;
  }

  @action
  removeToDo = (toDo) => {
    const index = this.items.findIndex(toDoItem => toDoItem.url === toDo.url);
    this.items.splice(index, 1);
  }
}

const observableTodoStore = new ObservableTodoStore();

export default observableTodoStore;
