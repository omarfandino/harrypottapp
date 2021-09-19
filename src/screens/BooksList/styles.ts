import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
  coverBooksContainer: {
    borderRadius: 25,
    height: 165,
    marginBottom: 15,
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
  },
  coverBooks: {
    height: '100%',
    left: 0,
    marginBottom: 15,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  flatList: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
  },
  flatlistContent: {
    backgroundColor: colors.gray,
    borderRadius: 25,
    marginBottom: 0,
    padding: 20,
    overflow: 'hidden',
  },
  iconSearch: {
    padding: 8,
    paddingLeft: 15,
  },
  inputSearch: {
    color: colors.wine,
    flex: 1,
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingLeft: 0,
    paddingRight: 10,
    paddingTop: 10,
  },
  mainContainer: {
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  listItemContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderColor: 'transparent',
    borderRadius: 25,
    borderWidth: 1,
    elevation: 5,
    justifyContent: 'center',
    paddingBottom: 15,
  },
  listItemContainerShadow: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    width: `${50 - 2}%`,
    elevation: 2,
  },
  searchSection: {
    alignItems: 'center',
    backgroundColor: colors.yellow,
    borderRadius: 200,
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  textContainer: {
    paddingHorizontal: '6%',
  },
  wholeScreenCenter: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
});

export default styles;
