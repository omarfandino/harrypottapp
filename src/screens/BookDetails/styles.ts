import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  contentContainer: {
    display: 'flex',
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 10,
  },
  coverBooksContainer: {
    width: '45%',
  },
  coverBooks: {
    borderRadius: 30,
    width: '100%',
    height: 250,
  },
  descriptionContainer: {
    backgroundColor: colors.white,
    padding: 20,
    width: '90%',
    borderRadius: 30,
  },
  footerContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    paddingLeft: 25,
    paddingTop: 15,
  },
  infoContainer: {
    width: '55%',
    paddingLeft: 10,
  },
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 10,
    flexWrap: 'wrap',
  },
  titleContainer: {
    backgroundColor: colors.yellow,
    width: '90%',
    height: '19%',
    borderRadius: 30,
    marginTop: 20,
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
