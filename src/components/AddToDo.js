import React, { Fragment } from 'react';
import { View, Text, TextInput } from 'react-native';
import Button from './Button';
import styles from './AddToDo.styles';
import Header from './Header';
import strings from '../assets/strings';

class AddToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { taskTitle: '', taskDescription: '', error: '' };
  }

  validateNewTask = () => {
    const { addToDo } = this.props;
    const { emptyTextOrDescription } = strings;
    if (this.state.taskTitle.length !== 0 && this.state.taskDescription.length !== 0) {
      addToDo(this.state.taskTitle, this.state.taskDescription);
    } else {
      this.setState({ error: emptyTextOrDescription });
    }
  }

  renderError = () => {
    const { errorContainer, errorStyle } = styles;
    if (this.state.error.length !== 0) {
      return <View style={errorContainer}><Text style={errorStyle}>{this.state.error}</Text></View>;
    }
    return <View />;
  }

  render() {
    const { onClickAction } = this.props;
    const {
      container, title, description, actions, borderBottom, borderText, rightActionContainer, leftActionContainer, centerContainer,
    } = styles;
    const { save, cancel, newTask } = strings;
    return (
      <Fragment>
        <Header>
          <View style={actions}>
            <Button onClickAction={onClickAction}>
              <Text style={leftActionContainer}> {cancel} </Text>
            </Button>
          </View>
          <View style={actions}>
            <Text style={centerContainer}>{newTask} </Text>
          </View>
          <View style={actions}>
            <Button onClickAction={() => this.validateNewTask()}>
              <Text style={rightActionContainer}> {save} </Text>
            </Button>
          </View>
        </Header>
        <View style={container}>
          <TextInput
            style={title}
            placeholder="Task title"
            value={this.state.taskTitle}
            onChangeText={(text) => { this.setState({ taskTitle: text }); }}
          />
          <View style={borderText} />
          <TextInput
            style={description}
            placeholder="Task description"
            multiline={true}
            numberOfLines={4}
            value={this.state.taskDescription}
            onChangeText={(text) => { this.setState({ taskDescription: text }); }}
          />
        </View>
        <View style={borderBottom} />
        {this.renderError()}
      </Fragment>
    );
  }
}

export default AddToDo;
