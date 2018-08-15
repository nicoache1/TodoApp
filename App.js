import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { colors } from './src/assets/colors';
import List from './src/components/List';
import AddToDo from './src/components/AddToDo';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addTask: false,
    };
  }

  navigateAddTodo = () => {
    this.setState({ addTask: true });
  };

  navigateToList = () => {
    this.setState({ addTask: false });
  };

  renderScreen = () => {
    if (this.state.addTask) {
      return <AddToDo onClickAction={this.navigateToList} />;
    }
    return <List onClickAction={this.navigateAddTodo} />;
  };

  render() {
    const { container } = styles;
    return (
      <View style={container}>
        <StatusBar
          backgroundColor={colors.blue}
          barStyle="light-content"
        />
        {this.renderScreen()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
