import { Navigation } from 'react-native-navigation';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import globalReducer from './reducers/globalReducer';
import registerScreens from './screens';
import scenes from '../../helpers/screens';

const store = createStore(globalReducer, composeWithDevTools(applyMiddleware(thunk)));

registerScreens(store, Provider);

Navigation.startSingleScreenApp({
  screen: {
    screen: scenes.TODO_LIST_SCREEN,
    title: 'Todo',
  },
});

