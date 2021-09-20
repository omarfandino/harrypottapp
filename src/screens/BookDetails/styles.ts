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
  coverBooksMini: {
    borderRadius: 20,
    width: '100%',
    height: 100,
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
    paddingTop: 10,
  },
  flatList: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 20,
  },
  flatlistContent: {
    borderRadius: 25,
    marginBottom: 0,
    padding: 20,
    overflow: 'hidden',
    justifyContent: 'center',
    alignContent: 'center',
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
  listItemContainer: {
    backgroundColor: colors.white,
    borderColor: 'transparent',
    borderRadius: 25,
    borderWidth: 1,
    elevation: 5,
    height: 100,
    width: 100,
    marginRight: 10,
  },
  listItemContainerShadow: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
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
    height: '15%',
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
