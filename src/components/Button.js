import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './Button.styles';

const Button = (props) => {
  const { onClickAction, id, children } = props;
  const { container } = styles;
  return (
    <View style={container}>
      <TouchableOpacity onPress={(e) => { onClickAction(e, id); }}>
        {children}
      </TouchableOpacity>
    </View>
  );
};

export default Button;
