import { StyleSheet } from 'react-native';
import { colors } from '../assets/colors';

const styles = StyleSheet.create({
  container: {
    width: 375,
    height: 64,
    backgroundColor: colors.blue,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingLeft: 25,
  },
  title: {
    width: 81,
    height: 20,
    fontSize: 17,
    marginTop: 32,
    marginBottom: 12,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: -0.41,
    textAlign: 'center',
    color: colors.white,
  },
  rightActionContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 15,
  },
  rightAction: {
    width: 18,
    height: 18,
    marginTop: 32,
    marginBottom: 12,
  },
});

export default styles;
