import { Navigation } from 'react-native-navigation';
import List from '../../list/List';
import AddToDo from '../../addToDo/AddToDo';
import scenes from '../../../helpers/screens';

const registerScreens = (store, Provider) => {
  Navigation.registerComponent(scenes.TODO_LIST_SCREEN, () => List, store, Provider);
  Navigation.registerComponent(scenes.ADD_TODO_SCREEN, () => AddToDo, store, Provider);
};

export default registerScreens;
