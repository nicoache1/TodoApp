import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { colors } from './src/assets/colors';
import List from './src/components/List';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { container } = styles;
    return (
      <View style={container}>
        <StatusBar
          backgroundColor={colors.blue}
          barStyle="light-content"
        />
        <List />
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
