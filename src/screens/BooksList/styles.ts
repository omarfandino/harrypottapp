import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
  coverBooks: {
    borderRadius: 25,
    height: 150,
    marginBottom: 15,
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
    justifyContent: 'center',
    width: '100%',
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
  wholeScreenCenter: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
});

export default styles;
