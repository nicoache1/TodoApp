import { Navigation } from 'react-native-navigation';
import List from '../../list/List';
import AddToDo from '../../addToDo/AddToDo';
import scenes from '../../../helpers/screens';

const registerScreens = () => {
  Navigation.registerComponent(scenes.TODO_LIST_SCREEN, () => List);
  Navigation.registerComponent(scenes.ADD_TODO_SCREEN, () => AddToDo);
};

export default registerScreens;
