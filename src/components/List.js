import React from 'react';
import { View, FlatList, Text, Image } from 'react-native';
import Header from './Header';
import ItemList from './ItemList';
import addIcon from '../assets/icons/add.png';
import Button from './Button';
import styles from './List.styles';
import strings from '../localization/en/strings';
import colors from '../helpers/colors';
import sampleItems from '../helpers/dataSourceSample';

class List extends React.Component {
  static navigatorStyle = {
    navBarBackgroundColor: colors.blue,
    navBarTextColor: colors.white,
  };

  static navigatorButtons = {
    rightButtons: [
      {
        id: 'goToDo',
        icon: addIcon,
      },
    ],
  }

  constructor(props) {
    super(props);
    this.state = {
      items: sampleItems,
    };
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    const { navigator } = this.props;
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'goToDo') {
        navigator.push({
          screen: 'ADD_TODO_SCREEN',
          animated: true,
          animationType: 'fade',
          title: 'Todo',
        });
      }
    }
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
      handleToggle,
      clearAllDone,
    } = this.props;
    return (
      <View>
        <FlatList
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
