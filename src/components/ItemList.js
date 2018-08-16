import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './ItemList.styles';
import Button from './Button';
import activeCheckbox from '../assets/icons/iconCheckboxActive.png';
import inactiveCheckbox from '../assets/icons/iconCheckboxInactive.png';

const ItemList = (props) => {
  const {
    item:
    {
      title, description, done, id,
    }, onClickAction,
  } = props;
  const {
    container, textTitle, textDescription, text, checkBox, button,
  } = styles;

  this.renderButton = () => {
    if (done) {
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
        <Button done={done} id={id} onClickAction={onClickAction}>
          {this.renderButton()}
        </Button>
      </View>
    </View>
  );
};

export default ItemList;
