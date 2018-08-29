import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import styles from './AddToDo.styles';
import colors from '../../helpers/colors';
import { addTodo } from '../app/reducers/actions';

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
        this.props.addTodoItem({ title: this.state.taskTitle });
        navigator.pop({
          animated: true,
          animationType: 'fade',
        });
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
    const {
      error,
    } = this.props;
    if (error) {
      return (
        <View
          style={errorContainer}
        >
          <Text
            style={errorStyle}
          >
            {error}
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
      <View>
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
      </View>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error,
});

const mapDispatchToProps = dispatch => ({
  addTodoItem: todo => dispatch(addTodo(todo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddToDo);

