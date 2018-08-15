import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './Header.styles';
import addIcon from '../assets/icons/add.png';
import Button from './Button';

const Header = (props) => {
  const { headerTitle } = props;
  const {
    container, titleContainer, title, rightActionContainer, rightAction,
  } = styles;
  return (
    <View style={container}>
      <View style={titleContainer}>
        <Text style={title}>{headerTitle}</Text>
      </View>
      <View style={rightActionContainer}>
        <Image style={rightAction} source={addIcon} />
      </View>
    </View>
  );
};

export default Header;
