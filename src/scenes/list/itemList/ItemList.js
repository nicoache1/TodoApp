import React from 'react';
import { View, Text, Image } from 'react-native';
import { observer } from 'mobx-react';
import mobx from 'mobx';
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

const ItemList = observer((props) => {
  const {
    item,
    handleToggle,
  } = props;
  const {
    container,
    textTitle,
    text,
    checkBox,
    button,
  } = styles;

  //TODO think a way to quit the arrow function.
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
          id={item.id}
          onClickAction={() => handleToggle(mobx.toJS(item))}
        >
          {this.renderButton(item.completed, button)}
        </Button>
      </View>
    </View>
  );
});

export default ItemList;
