import { StyleSheet } from 'react-native';
import colors from '../helpers/colors';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 192,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  actions: {
    flex: 1,
    marginTop: 20,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightActionContainer: {
    alignSelf: 'flex-end',
    fontSize: 17,
    fontWeight: '300',
    letterSpacing: -0.41,
    textAlign: 'right',
    color: colors.white,
  },
  leftActionContainer: {
    alignSelf: 'flex-start',
    fontSize: 17,
    fontWeight: '300',
    letterSpacing: -0.41,
    textAlign: 'left',
    color: colors.white,
  },
  centerContainer: {
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: -0.41,
    textAlign: 'center',
    color: colors.white,
  },
  title: {
    width: 343,
    height: 50,
    fontSize: 36,
    lineHeight: 54,
    letterSpacing: 0,
    textAlign: 'left',
    color: colors.darkGray,
    backgroundColor: colors.white,
  },
  borderBottom: {
    alignSelf: 'stretch',
    height: 2,
    backgroundColor: colors.borderGrey,
  },
  borderText: {
    width: 343,
    height: 2,
    backgroundColor: colors.pink,
  },
  description: {
    marginTop: 15,
    width: 335,
    height: 96,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: 'left',
    color: colors.darkGray,
    backgroundColor: colors.white,
  },
  errorContainer: {
    alignSelf: 'stretch',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
  },
  errorStyle: {
    color: colors.red,
    fontSize: 14,
    lineHeight: 20,
  },
});

export default styles;
