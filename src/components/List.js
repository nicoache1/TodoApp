import React from 'react';
import { View, FlatList, Text } from 'react-native';
import ItemList from './ItemList';
import addIcon from '../assets/icons/add.png';
import Button from './Button';
import styles from './List.styles';
import strings from '../localization/en/strings';
import colors from '../helpers/colors';
import sampleItems from '../helpers/dataSourceSample';
import scenes from '../helpers/scenes';

class List extends React.Component {
  static navigatorStyle = {
    navBarBackgroundColor: colors.blue,
    navBarTextColor: colors.white,
    navBarButtonColor: colors.white,
    statusBarTextColorScheme: 'light',
  };

  static navigatorButtons = {
    rightButtons: [
      {
        id: 'goToDo',
        icon: addIcon,
        buttonColor: colors.white,
        disableIconTint: true,
        buttonFontSize: 10,
      },
    ],
  }

  constructor(props) {
    super(props);
    this.state = {
      items: sampleItems,
    };
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    const { navigator } = this.props;
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'goToDo') {
        navigator.push({
          screen: scenes.ADD_TODO_SCREEN,
          animated: true,
          animationType: 'fade',
          title: 'Todo',
          passProps: { addToDo: this.addToDo },
          backButtonTitle: 'Cancel',
        });
      }
    }
  }

  clearAllDone = () => {
    this.setState((previousState) => {
      return { items: previousState.items.filter(element => element.done === false) };
    });
  }

  addToDo = (newTitle, newDescription) => {
    const newToDo = {
      id: `${newTitle}${newDescription}`,
      title: newTitle,
      description: newDescription,
      done: false,
    };
    this.setState((previousState) => {
      return { items: [...previousState.items, newToDo] };
    });
  }

  handleToggle = (id) => {
    this.setState((previousState) => {
      const newState = { ...previousState };
      const todo = newState.items.find(element => element.id === id);
      todo.done = !todo.done;
      return { ...newState };
    });
  }

  renderFooter = () => {
    const {
      footerContainer,
      clearButton,
    } = styles;
    const {
      clearAll,
    } = strings;
    return (
      <View
        style={footerContainer}
      >
        <Button
          onClickAction={this.clearAllDone}
        >
          <Text
            style={clearButton}
          >
            {clearAll}
          </Text>
        </Button>
      </View>
    );
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.items}
          renderItem={
            ({ item }) => (
              <ItemList
                key={item.id}
                item={item}
                handleToggle={this.handleToggle}
              />
            )
          }
          extraData={this.state}
          ListFooterComponent={
            this.renderFooter()
          }
        />
      </View>
    );
  }
}

export default List;
