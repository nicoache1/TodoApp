import React, { Component } from 'react';
import { View } from 'react-native';
import List from './List';
import AddToDo from './AddToDo';
import styles from './App.styles';
import sampleItems from '../helpers/dataSourceSample';

export default class App extends Component {
  constructor(props) {
    //TODO: implement react-navigation and redux to change dependencies and responsabilities.
    super(props);
    this.state = {
      addTask: false,
      items: sampleItems,
    };
  }

  navigateAddTodo = () => {
    this.setState({ addTask: true });
  };

  navigateToList = () => {
    this.setState({ addTask: false });
  };

  handleToggle = (id) => {
    this.setState((previousState) => {
      const newState = { ...previousState };
      const todo = newState.items.find(element => element.id === id);
      todo.done = !todo.done;
      return { ...newState };
    });
  }

  clearAllDone = () => {
    this.setState({ items: this.state.items.filter(element => element.done === false) });
  }

  addToDo = (newTitle, newDescription) => {
    const newToDo = {
      id: newTitle + newDescription,
      title: newTitle,
      description: newDescription,
      done: false,
    };
    this.setState({ items: [...this.state.items, newToDo] });
    this.navigateToList();
  }

  renderScreen = () => {
    if (this.state.addTask) {
      return (
        <AddToDo
          navigateToList={this.navigateToList}
          addToDo={this.addToDo}
        />
      );
    }
    return (
      <List
        items={this.state.items}
        navigateAddTodo={this.navigateAddTodo}
        handleToggle={this.handleToggle}
        clearAllDone={this.clearAllDone}
      />
    );
  };

  render() {
    const { container } = styles;
    return (
      <View
        style={container}
      >
        {this.renderScreen()}
      </View>
    );
  }
}
