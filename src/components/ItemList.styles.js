import { StyleSheet } from 'react-native';
import colors from '../assets/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: '#edeaea',
  },
  checkBox: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    margin: 16,
    marginBottom: 14,
  },
  text: {
    flexDirection: 'column',
    flex: 3,
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 16,
    marginBottom: 14,
  },
  textTitle: {
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: 'left',
    color: colors.black,
  },
  textDescription: {
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: 'left',
    color: colors.darkGray,
  },
  button: {
    height: 24,
    width: 24,
    borderWidth: 0,
  },
});

export default styles;
