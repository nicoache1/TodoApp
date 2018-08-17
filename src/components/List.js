import React from 'react';
import { View, FlatList, Text, Image } from 'react-native';
import Header from './Header';
import ItemList from './ItemList';
import addIcon from '../assets/icons/add.png';
import Button from './Button';
import styles from './List.styles';
import strings from '../localization/en/strings';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
    };
  }

  componentWillReceiveProps({ items }) {
    this.setState((previousState) => {
      return { ...previousState, items };
    });
  }

  renderHeader = (navigateAddTodo) => {
    const {
      title,
      titleContainer,
      rightActionContainer,
      rightAction,
    } = styles;
    const {
      titleApp,
    } = strings;
    return (
      <Header>
        <View
          style={titleContainer}
        >
          <Text
            style={title}
          >
            {titleApp}
          </Text>
        </View>
        <View
          style={rightActionContainer}
        >
          <Button
            onClickAction={navigateAddTodo}
          >
            <Image
              style={rightAction}
              source={addIcon}
            />
          </Button>
        </View>
      </Header>
    );
  }

  renderFooter = (clearAllDone) => {
    const {
      footerContainer,
      clearButton,
    } = styles;
    const {
      clearAll,
    } = strings;
    return (
      <View
        style={footerContainer}
      >
        <Button
          onClickAction={clearAllDone}
        >
          <Text
            style={clearButton}
          >
            {clearAll}
          </Text>
        </Button>
      </View>
    );
  }

  render() {
    const {
      navigateAddTodo,
      handleToggle,
      clearAllDone,
    } = this.props;
    return (
      <View>
        <FlatList
          ListHeaderComponent={
            this.renderHeader(navigateAddTodo)
          }
          data={this.state.items}
          renderItem={
            ({ item }) => (
              <ItemList
                key={item.id}
                item={item}
                handleToggle={handleToggle}
              />
            )
          }
          extraData={this.state}
          ListFooterComponent={
            this.renderFooter(clearAllDone)
          }
        />
      </View>
    );
  }
}

export default List;
