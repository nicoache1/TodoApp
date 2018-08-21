import { observable, action } from 'mobx';
import sampleData from '../../../helpers/dataSourceSample';
import strings from '../../../localization/en/strings';

class ObservableTodoStore {
  @observable items = sampleData;
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
        description: newDescription,
        done: false,
      };
      this.items.push(newToDo);
      this.error = '';
    } else {
      this.error = emptyTextOrDescription;
    }
    return newTitle.length !== 0 && newDescription.length !== 0;
  }

  @action
  handleToggle = (id) => {
    const todo = this.items.find(element => element.id === id);
    todo.done = !todo.done;
  }
}

const observableTodoStore = new ObservableTodoStore();

export default observableTodoStore;
