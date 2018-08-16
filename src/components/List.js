import React from 'react';
import { View, FlatList, Text, Image } from 'react-native';
import Header from './Header';
import ItemList from './ItemList';
import addIcon from '../assets/icons/add.png';
import Button from './Button';
import styles from './List.styles';
import strings from '../assets/strings';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
    };
  }

  componentWillReceiveProps({ items }) {
    this.setState({ ...this.state, items });
  }

  render() {
    const { onClickAction, handleToggle, clearAllDone } = this.props;
    const {
      title, titleContainer, rightActionContainer, rightAction, footerContainer, clearButton,
    } = styles;
    const { clearAll, titleApp } = strings;
    return (
      <View>
        <FlatList
          ListHeaderComponent={
            <Header>
              <View style={titleContainer}>
                <Text style={title}>{titleApp}</Text>
              </View>
              <View style={rightActionContainer}>
                <Button onClickAction={onClickAction}>
                  <Image style={rightAction} source={addIcon} />
                </Button>
              </View>
            </Header>}
          data={this.state.items}
          renderItem={({ item }) =>
            <ItemList key={item.id} item={item} onClickAction={handleToggle} />}
          extraData={this.state}
          ListFooterComponent={
            <View style={footerContainer}>
              <Button onClickAction={clearAllDone}>
                <Text style={clearButton}>{clearAll}</Text>
              </Button>
            </View>
          }
        />
      </View>
    );
  }
}

export default List;
