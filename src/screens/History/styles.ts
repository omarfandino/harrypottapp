import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  flatList: {
    width: '100%',
  },
  button: {
    backgroundColor: colors.wine,
  },
});

export default styles;
