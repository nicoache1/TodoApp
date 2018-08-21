import { Navigation } from 'react-native-navigation';
import { useStrict } from 'mobx';
import registerScreens from './screens';
import scenes from '../../helpers/screens';

useStrict(true);
registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: scenes.TODO_LIST_SCREEN,
    title: 'Todo',
  },
});
