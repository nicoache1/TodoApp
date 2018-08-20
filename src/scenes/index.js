import { Navigation } from 'react-native-navigation';
import List from '../components/List';
import AddToDo from '../components/AddToDo';
import scenes from '../helpers/scenes';

const registerScreens = () => {
  Navigation.registerComponent(scenes.TODO_LIST_SCREEN, () => List);
  Navigation.registerComponent(scenes.ADD_TODO_SCREEN, () => AddToDo);
};

export default registerScreens;
