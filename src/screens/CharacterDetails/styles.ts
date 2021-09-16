import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  contentContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  coverBooksContainer: {
    width: '40%',
  },
  coverBooks: {
    borderRadius: 1,
  },
  descriptionContainer: {
    backgroundColor: colors.white,
    padding: 20,
    width: '90%',
    borderRadius: 30,
  },
  infoContainer: {
    width: '40%',
  },
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  titleContainer: {
    backgroundColor: colors.yellow,
    width: '90%',
    height: '20%',
    borderRadius: 30,
  },
  typoContainer: {
    padding: 25,
    alignItems: 'center',
  },
  wholeScreenCenter: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
});

export default styles;
