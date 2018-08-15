import { StyleSheet } from 'react-native';
import { colors } from '../assets/colors';

const styles = StyleSheet.create({
  container: {
    width: 375,
    height: 64,
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
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
  rightAction: {
    width: 25,
    height: 20,
    marginTop: 32,
    marginBottom: 12,
    fontSize: 17,
    fontWeight: '300',
    fontStyle: 'normal',
    letterSpacing: -0.41,
    textAlign: 'right',
  },
});

export default styles;
