import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { observer } from 'mobx-react/native';
import ItemList from './itemList/ItemList';
import addIcon from '../../assets/icons/add.png';
import Button from '../../common/Button';
import styles from './List.styles';
import strings from '../../localization/en/strings';
import colors from '../../helpers/colors';
import scenes from '../../helpers/screens';
import toDoStore from '../app/stores';
import ToDoController from '../../networking/controllers/ToDoController';

@observer
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
        buttonFontSize: 10,
      },
    ],
  }

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  componentDidMount() {
    ToDoController.getToDo();
  }

  onNavigatorEvent = (event) => {
    const { navigator } = this.props;
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'goToDo') {
        navigator.push({
          screen: scenes.ADD_TODO_SCREEN,
          animated: true,
          animationType: 'fade',
          title: strings.titleApp,
          passProps: { addToDo: this.addToDo },
          backButtonTitle: 'Cancel',
        });
      }
    }
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
          onClickAction={ToDoController.clearAllDone}
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

  renderScreen = () => {
    const { startContainer, startText } = styles;
    if (toDoStore.start) {
      return (
        <View
          style={startContainer}
        >
          <Text
            style={startText}
          >
            {strings.titleApp}
          </Text>
        </View>
      );
    }
    return (
      <FlatList
        data={toDoStore.items.slice()}
        keyExtractor={item => item.id}
        renderItem={
          ({ item }) => (
            <ItemList
              item={item}
              handleToggle={ToDoController.patchToDo}
            />
          )
        }
        ListFooterComponent={
          this.renderFooter()
        }
      />
    );
  }

  render() {
    return (
      <View>
        {this.renderScreen()}
      </View>
    );
  }
}

export default List;
