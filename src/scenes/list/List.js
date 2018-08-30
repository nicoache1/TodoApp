import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import ItemList from './itemList/ItemList';
import addIcon from '../../assets/icons/add.png';
import Button from '../../common/Button';
import styles from './List.styles';
import strings from '../../localization/en/strings';
import colors from '../../helpers/colors';
import scenes from '../../helpers/screens';
import { getTodo, toggleTodo, clearAllDone } from '../app/reducers/actions';

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
    this.props.getTodoItems();
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
    const {
      clearAllTodoDone,
      toDos,
    } = this.props;
    const toDosDone = toDos.filter(toDo => toDo.completed === true);
    return (
      <View
        style={footerContainer}
      >
        <Button
          onClickAction={() => clearAllTodoDone(toDosDone)}
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
    const { toDos, handleToggleItem } = this.props;
    return (
      <View>
        <FlatList
          data={toDos}
          keyExtractor={item => item.url}
          renderItem={
            ({ item }) => (
              <ItemList
                item={item}
                handleToggleItem={handleToggleItem}
              />
            )
          }
          ListFooterComponent={
            this.renderFooter()
          }
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    toDos: state.toDos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTodoItems: () => dispatch(getTodo()),
    handleToggleItem: (id, item) => dispatch(toggleTodo(id, item)),
    clearAllTodoDone: toDos => dispatch(clearAllDone(toDos)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
