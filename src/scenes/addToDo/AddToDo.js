import React, { Fragment } from 'react';
import { observer } from 'mobx-react/native';
import { View, Text, TextInput } from 'react-native';
import styles from './AddToDo.styles';
import colors from '../../helpers/colors';
import toDoStore from '../app/stores';
import ToDoController from '../../networking/controllers/ToDoController';

@observer
class AddToDo extends React.Component {
  static navigatorStyle = {
    navBarBackgroundColor: colors.blue,
    navBarTextColor: colors.white,
    navBarButtonColor: colors.white,
    statusBarTextColorScheme: 'light',
  };

  static navigatorButtons = {
    rightButtons: [
      {
        title: 'Save',
        id: 'saveToDo',
        buttonColor: colors.white,
        buttonFontSize: 14,
        buttonFontWeight: '400',
      },
    ],
    leftButtons: [
      {
        buttonColor: colors.white,
      },
    ],
  }

  constructor(props) {
    super(props);
    this.state = {
      taskTitle: '',
    };
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = (event) => {
    const { navigator } = this.props;
    if (
      event.type === 'NavBarButtonPress'
    ) {
      if (event.id === 'saveToDo') {
        if (toDoStore.validateToDo(this.state.taskTitle)) {
          ToDoController.sendToDo({ title: this.state.taskTitle });
          navigator.pop({
            animated: true,
            animationType: 'fade',
          });
        }
      }
    }
  }

  onChangeText = (text) => {
    this.setState({ taskTitle: text });
  }

  renderError = () => {
    const {
      errorStyle,
      errorContainer,
    } = styles;
    if (toDoStore.error.length !== 0) {
      return (
        <View
          style={errorContainer}
        >
          <Text
            style={errorStyle}
          >
            {toDoStore.error}
          </Text>
        </View>);
    }
    return <View />;
  }

  render() {
    const {
      container,
      title,
      borderBottom,
      borderText,
    } = styles;
    return (
      <Fragment>
        <View
          style={container}
        >
          <TextInput
            style={title}
            placeholder="Task title"
            value={this.state.taskTitle}
            onChangeText={this.onChangeText}
          />
          <View
            style={borderText}
          />
        </View>
        <View
          style={borderBottom}
        />
        {this.renderError()}
      </Fragment>
    );
  }
}

export default AddToDo;
