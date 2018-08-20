import { Navigation } from 'react-native-navigation';
import registerScreens from '../scenes';
import scenes from '../helpers/scenes';

registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: scenes.TODO_LIST_SCREEN,
    title: 'Todo',
  },
});
