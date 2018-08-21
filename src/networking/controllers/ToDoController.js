import HttpService from '../HttpService';
import toDoStore from '../../scenes/app/stores';

class ToDoController {
  getToDo = () => {
    try {
      const response = HttpService.get('');
      toDoStore.addItems(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  sendToDo = async (newToDo) => {
    try {
      const response = await HttpService.post('', newToDo);
      toDoStore.addToDo(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  deleteToDo = async (toDo) => {
    try {
      const id = this.getId(toDo.url);
      const response = await HttpService.delete(id);
      toDoStore.removeToDo(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  putToDo = async (toDo) => {
    try {
      const id = this.getId(toDo.url);
      const response = await HttpService.patch(id);
      toDoStore.updateToDo(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  getId = (url) => {
    const urlArray = url.split('/');
    const id = urlArray[urlArray.length - 1];
    return id;
  }
}

export default new ToDoController();
