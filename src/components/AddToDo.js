import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Button from './Button';
import styles from './AddToDo.styles';

class AddToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { taskTitle: '', taskDescription: '' };
  }

  render() {
    const { onClickAction } = this.props;
    const { title, description } = styles;
    return (
      <View>
        <TextInput
          style={title}
          placeholder="Task title"
          value={this.state.taskTitle}
          onChangeText={(text) => { this.setState({ taskTitle: text }); }}
        />
        <TextInput
          style={description}
          placeholder="Task description"
          multiline={true}
          numberOfLines={4}
          value={this.state.taskDescription}
          onChangeText={(text) => { this.setState({ taskDescription: text }); }}
        />
        <Button onClickAction={onClickAction}>
          <Text> Add Task </Text>
        </Button>
      </View>
    );
  }
}

export default AddToDo;
