import { StyleSheet } from 'react-native';
import colors from '../helpers/colors';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 64,
    backgroundColor: colors.blue,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default styles;
