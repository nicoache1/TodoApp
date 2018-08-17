// import { AppRegistry } from 'react-native';
// import App from './src/components/App';
// import { name as appName } from './app.json';

// AppRegistry.registerComponent(appName, () => App);
import { Navigation } from 'react-native-navigation';
import registerScreens from './src/scenes';

registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: 'TODO_LIST_SCREEN', // unique ID registered with Navigation.registerScreen
    title: 'Todo', // title of the screen as appears in the nav bar (optional)
  },
});
