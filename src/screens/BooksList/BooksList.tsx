import React, { useCallback, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { DefaultButton, Header, Separator, Typography } from '../../components';
import styles from './styles';

import { goToScreen } from '../../navigation/controls';
import { colors } from '../../utils/theme';
import useBooksData from './hooks/useBooksData';
import useAsyncSearchHistory from '../../utils/hooks/useAsyncSearchHistory';

const ListItem = ({
  id,
  title,
  book_covers,
}: {
  id: number;
  title: string;
  book_covers: Cover[];
}) => {
  const bookCover =
    book_covers.length && book_covers[0].URL
      ? book_covers[0].URL
      : require('../../assets/images/no-image.png');
  const image: any = { uri: bookCover };

  return (
    <TouchableOpacity
      onPress={() => goToScreen('BookDetails', { id, title })}
      style={styles.listItemContainerShadow}
    >
      <View style={styles.listItemContainer}>
        <View style={styles.coverBooksContainer}>
          <Image source={image} style={styles.coverBooks} />
        </View>
        <View style={styles.textContainer}>
          <Typography numberOfLines={2} align="center">
            {title}
          </Typography>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const flatlistKeyExtractor = (item: Book) => `${item.id}`;

const renderFlatlistItem = ({ item }: { item: Book }) => (
  <ListItem id={item.id} title={item.title} book_covers={item.book_covers} />
);

const BooksListScreen = () => {
  const [refreshFlag, setRefreshFlag] = useState<boolean>(false);
  const { books, loading, errorOccurred } = useBooksData(refreshFlag);

  const { bouncedHandleOnChangeText } = useAsyncSearchHistory({ type: 'book' });

  const netInfo = useNetInfo();

  const toggleRefreshFlag = useCallback(() => {
    setRefreshFlag(!refreshFlag);
  }, [refreshFlag]);

  if (!netInfo.isConnected) {
    return (
      <View style={styles.wholeScreenCenter}>
        <Typography size={20}>You don't have internet :'(</Typography>
      </View>
    );
  }

  if (loading) {
    return (
      <>
        <Header showBackButton={false} title="Home Screen" />
        <View style={styles.wholeScreenCenter}>
          <ActivityIndicator size="large" color={colors.wine} />
        </View>
      </>
    );
  }

  if (errorOccurred) {
    return (
      <View style={styles.wholeScreenCenter}>
        <Typography size={20}>An unknown error occurred :'(</Typography>
        <Separator size={15} />
        <DefaultButton text="Retry" onPress={toggleRefreshFlag} />
      </View>
    );
  }

  return (
    <>
      <Header showBackButton={false} />
      <Separator size={20} />
      <View style={styles.searchSection}>
        <MaterialIcon name="search" size={30} color={colors.wine} style={styles.iconSearch} />
        <TextInput
          style={styles.inputSearch}
          placeholder="Search a book"
          underlineColorAndroid="transparent"
          placeholderTextColor={colors.wine}
          onChangeText={(text) => {
            bouncedHandleOnChangeText(text);
          }}
        />
      </View>
      <Separator size={10} />
      <Typography align="center" color={colors.wine} size={25} variant="bold">
        BOOKS
      </Typography>
      <Separator size={15} />
      <View style={styles.mainContainer}>
        <FlatList
          keyExtractor={flatlistKeyExtractor}
          refreshing={loading}
          onRefresh={toggleRefreshFlag}
          data={books}
          renderItem={renderFlatlistItem}
          ItemSeparatorComponent={Separator}
          contentContainerStyle={styles.flatlistContent}
          style={styles.flatList}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapperStyle}
        />
      </View>
    </>
  );
};

export default BooksListScreen;
