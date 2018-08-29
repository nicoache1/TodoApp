import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './ItemList.styles';
import Button from '../../../common/Button';
import activeCheckbox from '../../../assets/icons/iconCheckboxActive.png';
import inactiveCheckbox from '../../../assets/icons/iconCheckboxInactive.png';

this.renderButton = (completed, button) => {
  if (completed) {
    return (
      <Image
        style={button}
        source={activeCheckbox}
      />
    );
  }
  return (
    <Image
      style={button}
      source={inactiveCheckbox}
    />
  );
};

const ItemList = (props) => {
  const {
    item,
    handleToggleItem,
  } = props;
  const {
    container,
    textTitle,
    text,
    checkBox,
    button,
  } = styles;

  return (
    <View
      style={container}
    >
      <View
        style={text}
      >
        <Text
          style={textTitle}
        >
          {item.title}
        </Text>
      </View>
      <View
        style={checkBox}
      >
        <Button
          completed={item.completed}
          item={item}
          onClickAction={handleToggleItem}
        >
          {this.renderButton(item.completed, button)}
        </Button>
      </View>
    </View>
  );
};

export default ItemList;
