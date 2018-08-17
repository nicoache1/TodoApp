import React from 'react';
import { View, StatusBar } from 'react-native';
import colors from '../helpers/colors';
import styles from './Header.styles';

const Header = (props) => {
  const {
    container,
  } = styles;
  return (
    <View
      style={container}
    >
      <StatusBar
        backgroundColor={colors.blue}
        barStyle="light-content"
      />
      {props.children}
    </View>
  );
};

export default Header;
