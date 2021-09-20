import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';

import { DefaultButton, Header, Separator, Typography } from '../../components';
import styles from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage';

type SearchHistoryItem = {
  text: string;
  type: string;
};

/**
 * Item to be rendered inside a flat list
 * @param text string : Text searched
 * @param type string : Book or Character
 * @returns
 */
const ListItem = ({ text, type }: SearchHistoryItem) => (
  <View>
    <Typography numberOfLines={2} align="center">
      {text}
    </Typography>
    <Typography align="center" variant="bold">
      {type.toUpperCase()}
    </Typography>
  </View>
);

const renderFlatlistItem = ({ item }: { item: SearchHistoryItem }) => (
  <ListItem text={item.text} type={item.type} />
);

const HistoryScreen = () => {
  const [SearchHistoryItems, setSearchHistoryItems] = useState([]);

  /**
   * Get search history from async storage
   */
  useEffect(() => {
    const getSearchHistoryFromStorage = async () => {
      const historySearchRaw = await AsyncStorage.getItem('searchHistory');
      if (historySearchRaw && historySearchRaw.length) {
        const historySearch = JSON.parse(historySearchRaw);
        setSearchHistoryItems(historySearch.data);
      } else {
        setSearchHistoryItems([]);
      }
      return () => setSearchHistoryItems([]);
    };
    getSearchHistoryFromStorage();
  }, [SearchHistoryItems]);

  const resetSearchHistory = () => {
    AsyncStorage.clear();
    setSearchHistoryItems([]);
  };

  return (
    <>
      <Header showBackButton={false} title="History Search" />
      <View style={styles.mainContainer}>
        <Separator size={15} />
        <View style={styles.mainContainer}>
          <FlatList
            // keyExtractor={flatlistKeyExtractor}
            data={SearchHistoryItems}
            renderItem={renderFlatlistItem}
            ItemSeparatorComponent={Separator}
            // contentContainerStyle={styles.flatlistContent}
            style={styles.flatList}
            // columnWrapperStyle={styles.columnWrapperStyle}
          />
        </View>
        <Separator size={15} />
        <DefaultButton text="Reset Search History" onPress={resetSearchHistory} />
        <Separator size={15} />
      </View>
    </>
  );
};

export default HistoryScreen;
