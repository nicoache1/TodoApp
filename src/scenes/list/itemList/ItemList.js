import React from 'react';
import { View, Text, Image } from 'react-native';
import { observer } from 'mobx-react';
import styles from './ItemList.styles';
import Button from '../../../common/Button';
import activeCheckbox from '../../../assets/icons/iconCheckboxActive.png';
import inactiveCheckbox from '../../../assets/icons/iconCheckboxInactive.png';

this.renderButton = (done, button) => {
  if (done) {
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
    item:
    {
      title,
      description,
      done,
      id,
    },
    handleToggle,
  } = props;
  const {
    container,
    textTitle,
    textDescription,
    text,
    checkBox,
    button,
  } = styles;

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
          {title}
        </Text>
        <Text
          style={textDescription}
        >
          {description}
        </Text>
      </View>
      <View
        style={checkBox}
      >
        <Button
          done={done}
          id={id}
          onClickAction={handleToggle}
        >
          {this.renderButton(done, button)}
        </Button>
      </View>
    </View>
  );
});

export default ItemList;
