import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './ItemList.styles';
import Button from './Button';
import activeCheckbox from '../assets/icons/iconCheckboxActive.png';
import inactiveCheckbox from '../assets/icons/iconCheckboxInactive.png';

const ItemList = (props) => {
  const {
    item:
    {
      title, description, selected, toggle, id,
    },
  } = props;
  const {
    container, textTitle, textDescription, text, checkBox, button,
  } = styles;

  this.renderButton = () => {
    if (selected) {
      return <Image style={button} source={activeCheckbox} />;
    }
    return <Image style={button} source={inactiveCheckbox} />;
  };

  return (
    <View style={container}>
      <View style={text}>
        <Text style={textTitle}>{title}</Text>
        <Text style={textDescription}>{description}</Text>
      </View>
      <View style={checkBox}>
        <Button selected={selected} id={id} onClickAction={toggle}>
          {this.renderButton()}
        </Button>
      </View>
    </View>
  );
};

export default ItemList;
