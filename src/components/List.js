import React from 'react';
import { View, FlatList } from 'react-native';
import Header from './Header';
import ItemList from './ItemList';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0, title: 'Titulo 1', description: 'Una descripcion 1', selected: false,
        },
        {
          id: 1, title: 'Titulo 2', description: 'Una descripcion 2', selected: true,
        },
        {
          id: 2, title: 'Titulo 3', description: 'Una descripcion 3', selected: true,
        },
        {
          id: 3, title: 'Titulo 4', description: 'Una descripcion 4', selected: false,
        },
      ],
    };
  }

  handleToggle = (event, id) => {
    this.setState((previousState) => {
      const newItems = [...previousState.items];
      newItems[id].selected = !newItems[id].selected;
      return { ...previousState, items: newItems };
    });
  }

  render() {
    const { onClickAction } = this.props;
    return (
      <View>
        <FlatList
          ListHeaderComponent={<Header headerTitle="Todo" onClickAction={onClickAction} />}
          data={this.state.items}
          renderItem={({ item }) =>
            <ItemList key={item.id} item={item} onClickAction={this.handleToggle} />}
          extraData={this.state}
        />
      </View>
    );
  }
}

export default List;
