import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './Header.styles';
import addIcon from '../assets/icons/add.png';
import Button from './Button';

const Header = (props) => {
  const { headerTitle, onClickAction } = props;
  const {
    container, titleContainer, title, rightActionContainer, rightAction,
  } = styles;
  return (
    <View style={container}>
      <View style={titleContainer}>
        <Text style={title}>{headerTitle}</Text>
      </View>
      <View style={rightActionContainer}>
        <Button onClickAction={onClickAction}>
          <Image style={rightAction} source={addIcon} />
        </Button>
      </View>
    </View>
  );
};

export default Header;
