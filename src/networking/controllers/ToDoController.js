import HttpService from '../HttpService';
import toDoStore from '../../scenes/app/stores';
import Utils from '../../helpers/Utils';

class ToDoController {
  //TODO: change the way of handle errors and remove the console logs.
  getToDo = async () => {
    try {
      const response = await HttpService.get('');
      toDoStore.addItems(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  sendToDo = async (newToDo) => {
    try {
      const response = await HttpService.post('', newToDo);
      const result = toDoStore.addToDo(response.data);
      return result;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  deleteToDo = async (toDo) => {
    try {
      const id = Utils.getId(toDo.url);
      const response = await HttpService.delete(id);
      toDoStore.removeToDo(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  patchToDo = async (id) => {
    try {
      const body = toDoStore.getToDoById(id);
      body.completed = !body.completed;
      const response = await HttpService.patch(id, body);
      toDoStore.updateToDo(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  clearAllDone = () => {
    const itemsToRemove = toDoStore.getToDosDone();
    itemsToRemove.forEach((toDoDone) => {
      this.deleteToDo(toDoDone);
    });
  }
}

export default new ToDoController();
