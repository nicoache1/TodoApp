import React, { Component } from 'react';
import { View } from 'react-native';
import List from './List';
import AddToDo from './AddToDo';
import styles from './App.styles';

export default class App extends Component {
  constructor(props) {
    //TODO: implement react-navigation and redux to change dependencies and responsabilities.
    super(props);
    this.state = {
      addTask: false,
      items: [
        {
          id: 'Titulo 1Una descripcion 1', title: 'Titulo 1', description: 'Una descripcion 1', done: false,
        },
        {
          id: 'Titulo 2Una descripcion 2', title: 'Titulo 2', description: 'Una descripcion 2', done: true,
        },
        {
          id: 'Titulo 3Una descripcion 3', title: 'Titulo 3', description: 'Una descripcion 3', done: true,
        },
        {
          id: 'Titulo 4Una descripcion 4', title: 'Titulo 4', description: 'Una descripcion 4', done: false,
        },
      ],
    };
  }

  navigateAddTodo = () => {
    this.setState({ addTask: true });
  };

  navigateToList = () => {
    this.setState({ addTask: false });
  };

  handleToggle = (event, id) => {
    this.setState((previousState) => {
      const todo = previousState.items.find(element => element.id === id);
      todo.done = !todo.done;
      return { ...previousState };
    });
  }

  clearAllDone = () => {
    this.setState({ items: this.state.items.filter(element => element.done === false) });
  }

  addToDo = (newTitle, newDescription) => {
    const newToDo = {
      id: newTitle + newDescription, title: newTitle, description: newDescription, done: false,
    };
    this.setState({ items: [...this.state.items, newToDo] });
    this.navigateToList();
  }

  renderScreen = () => {
    if (this.state.addTask) {
      return <AddToDo onClickAction={this.navigateToList} addToDo={this.addToDo} />;
    }
    return <List items={this.state.items} onClickAction={this.navigateAddTodo} handleToggle={this.handleToggle} clearAllDone={this.clearAllDone} />;
  };


  render() {
    const { container } = styles;
    return (
      <View style={container}>
        {this.renderScreen()}
      </View>
    );
  }
}
