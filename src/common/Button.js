import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './Button.styles';

const Button = (props) => {
  const {
    onClickAction,
    item,
    children,
  } = props;
  const {
    container,
  } = styles;

  return (
    <View
      style={container}
    >
      <TouchableOpacity
        onPress={() => onClickAction(item)}
      >
        {children}
      </TouchableOpacity>
    </View>
  );
};

export default Button;
