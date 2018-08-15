import { StyleSheet } from 'react-native';
import { colors } from '../assets/colors';

const styles = StyleSheet.create({
  container: {},
  title: {
    width: 343,
    height: 50,
    fontSize: 36,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 54,
    letterSpacing: 0,
    textAlign: 'left',
    color: colors.darkGray,
    backgroundColor: colors.white,
  },
  description: {
    width: 335,
    height: 96,
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: 'left',
    color: colors.darkGray,
    backgroundColor: colors.white,
  },
});

export default styles;
