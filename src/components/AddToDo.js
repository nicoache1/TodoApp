import React, { Fragment } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './AddToDo.styles';
import strings from '../localization/en/strings';
import colors from '../helpers/colors';

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
        disableIconTint: true,
        buttonColor: colors.white,
      },
    ],
  }

  constructor(props) {
    super(props);
    this.state = {
      taskTitle: '',
      taskDescription: '',
      error: '',
    };
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    const { navigator } = this.props;
    if (
      event.type === 'NavBarButtonPress' &&
      event.id === 'saveToDo' &&
      this.validateNewTask()
    ) {
      navigator.pop({
        animated: true,
        animationType: 'fade',
      });
    }
  }

  onChangeDescription = (text) => {
    this.setState({ taskDescription: text });
  }

  onChangeText = (text) => {
    this.setState({ taskTitle: text });
  }

  validateNewTask = () => {
    const { addToDo } = this.props;
    const { emptyTextOrDescription } = strings;
    let result;
    if (this.state.taskTitle.length !== 0 && this.state.taskDescription.length !== 0) {
      addToDo(this.state.taskTitle, this.state.taskDescription);
      result = true;
    } else {
      this.setState({ error: emptyTextOrDescription });
      result = false;
    }
    return result;
  }

  renderError = () => {
    const {
      errorStyle,
      errorContainer,
    } = styles;
    if (this.state.error.length !== 0) {
      return (
        <View
          style={errorContainer}
        >
          <Text
            style={errorStyle}
          >
            {this.state.error}
          </Text>
        </View>);
    }
    return <View />;
  }

  render() {
    const {
      container,
      title,
      description,
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
          <TextInput
            style={description}
            placeholder="Task description"
            multiline
            numberOfLines={4}
            value={this.state.taskDescription}
            onChangeText={this.onChangeDescription}
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
