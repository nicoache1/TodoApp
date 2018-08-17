import { Navigation } from 'react-native-navigation';
import List from '../components/List';
import AddToDo from '../components/AddToDo';

const registerScreens = () => {
  Navigation.registerComponent('TODO_LIST_SCREEN', () => List);
  Navigation.registerComponent('ADD_TODO_SCREEN', () => AddToDo);
};

export default registerScreens;
