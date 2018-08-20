import { Navigation } from 'react-native-navigation';
import registerScreens from './screens';
import scenes from '../../helpers/scenes';

registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: scenes.TODO_LIST_SCREEN,
    title: 'Todo',
  },
});
