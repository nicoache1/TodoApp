import { observable, action } from 'mobx';
import strings from '../../../localization/en/strings';

class ObservableTodoStore {
  @observable items = [];
  @observable error = '';

  @action
  clearAllDone = () => {
    this.items = this.items.filter(element => element.done === false);
  }

  @action
  addToDo = (newTitle, newDescription) => {
    const { emptyTextOrDescription } = strings;
    if (newTitle.length !== 0 && newDescription.length !== 0) {
      const newToDo = {
        id: `${newTitle}${newDescription}`,
        title: newTitle,
        completed: false,
      };
      this.items.push(newToDo);
      this.error = '';
    } else {
      this.error = emptyTextOrDescription;
    }
    return newTitle.length !== 0 && newDescription.length !== 0;
  }

  @action
  addItems = (newItems) => {
    this.items = newItems;
  }

  @action
  handleToggle = (id) => {
    const toDo = this.items.find(element => element.id === id);
    toDo.completed = !toDo.completed;
  }

  @action
  removeToDo = (toDo) => {
    const index = this.items.find(toDo);
    this.items.splice(index, 1);
  }

  @action
  updateToDo = (toDo) => {
    this.removeToDo(toDo);
    this.addToDo(toDo);
  }
}

const observableTodoStore = new ObservableTodoStore();

export default observableTodoStore;
