import { observable, action, toJS } from 'mobx';
import strings from '../../../localization/en/strings';
import Utils from '../../../helpers/Utils';

class ObservableTodoStore {
  @observable items = [];
  @observable error = '';
  @observable start = true;

  @action
  clearAllDone = () => {
    this.items = this.items.filter(element => element.completed === false);
  }

  getToDosDone = () => {
    return this.items.filter(element => element.completed === true);
  }

  getToDoById = (id) => {
    return toJS(this.items.find(element => element.id === id));
  }

  @action
  addToDo = (newToDo) => {
    const id = { id: Utils.getId(newToDo.url) };
    const toDoWithId = { ...newToDo, ...id };
    this.items.push(toDoWithId);
  }

  @action
  validateToDo = (title) => {
    const { emptyTextOrDescription } = strings;
    this.error = '';
    if (title.length === 0) {
      this.error = emptyTextOrDescription;
    }
    return title.length !== 0;
  }

  @action
  addItems = (newItems) => {
    newItems.forEach((toDo) => {
      this.addToDo(toDo);
    });
    this.start = false;
  }

  @action
  handleToggle = (id) => {
    const toDo = this.items.find(element => element.id === id);
    toDo.completed = !toDo.completed;
  }

  @action
  removeToDo = (toDo) => {
    const index = this.items.findIndex(toDoItem => toDoItem.url === toDo.url);
    this.items.splice(index, 1);
  }

  @action
  updateToDo = (toDo) => {
    this.handleToggle(Utils.getId(toDo.url));
  }
}

const observableTodoStore = new ObservableTodoStore();

export default observableTodoStore;
