import { StyleSheet } from 'react-native';
import colors from '../assets/colors';

const styles = StyleSheet.create({
  titleContainer: {
    flex: 2,
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
  footerContainer: {
    marginTop: 15,
  },
  clearButton: {
    width: 204,
    height: 32,
    fontSize: 14,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 32,
    letterSpacing: 0,
    textAlign: 'center',
    color: colors.pink,
  },
});

export default styles;
