import React from 'react';
import { Navigation } from 'react-native-navigation';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from '../../reducers/app/rootReducer';
import * as appActions from '../../reducers/app/actions';
import registerScreens from './screens';
import scenes from '../../helpers/screens';

const store = createStore(rootReducer, applyMiddleware(thunk));

registerScreens(store, Provider);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    store.subscribe(this.onStoreUpdate);
    store.dispatch(appActions.appInitialized());
  }

  onStoreUpdate = () => {
    const { root } = store.getState().app;
    // handle a root change
    if (this.currentRoot !== root) {
      this.currentRoot = root;
      this.startApp(root);
    }
  };

  startApp = (root) => {
    switch (root) {
      case scenes.TODO_LIST_SCREEN:
        Navigation.startSingleScreenApp({
          screen: {
            screen: scenes.TODO_LIST_SCREEN,
            title: 'Todo',
          },
        });
        break;
      default:
        break;
    }
  }
}

