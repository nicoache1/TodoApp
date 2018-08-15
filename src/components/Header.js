import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './Header.styles';
import Button from './Button';

const Header = (props) => {
  const { headerTitle } = props;
  const { container, title, rightAction } = styles;
  return (
    <View style={container}>
      <Text style={title}>{headerTitle}</Text>
      <Button>
        <Text style={rightAction}>Go to second</Text>
      </Button>
    </View>
  );
};

export default Header;
