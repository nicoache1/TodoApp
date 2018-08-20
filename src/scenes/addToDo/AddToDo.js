import React, { Fragment } from 'react';
import { observer } from 'mobx-react/native';
import { View, Text, TextInput } from 'react-native';
import styles from './AddToDo.styles';
import colors from '../../helpers/colors';
import mobxStore from '../app/stores';

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
      taskDescription: '',
    };
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = (event) => {
    const { navigator } = this.props;
    if (
      event.type === 'NavBarButtonPress'
    ) {
      if (event.id === 'saveToDo') {
        const result = mobxStore.addToDo(this.state.taskTitle, this.state.taskDescription);
        if (result) {
          navigator.pop({
            animated: true,
            animationType: 'fade',
          });
        }
      }
    }
  }

  onChangeDescription = (text) => {
    this.setState({ taskDescription: text });
  }

  onChangeText = (text) => {
    this.setState({ taskTitle: text });
  }

  renderError = () => {
    const {
      errorStyle,
      errorContainer,
    } = styles;
    if (mobxStore.error.length !== 0) {
      return (
        <View
          style={errorContainer}
        >
          <Text
            style={errorStyle}
          >
            {mobxStore.error}
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
