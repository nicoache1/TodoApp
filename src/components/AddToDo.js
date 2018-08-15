import React from 'react';
import { View, Text } from 'react-native';
import Button from './Button';

const AddToDo = (props) => {
  const { onClickAction } = props;
  return (
    <View>
      <Text>
        SecondScreen
      </Text>
      <Button onClickAction={onClickAction}>
        <Text> Add Task </Text>
      </Button>
    </View>
  );
};

export default AddToDo;
