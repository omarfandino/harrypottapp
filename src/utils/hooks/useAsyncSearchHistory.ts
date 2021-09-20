// import { useEffect, useState } from 'react';

import { debounce } from 'lodash';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {
  type: 'book' | 'character';
}

/**
 * Store searched string in async storage
 * @param type string: Checks if it's a book or character search related
 * @returns Debounced function
 */
function useAsyncSearchHistory({ type = 'book' }: Props) {
  const handleOnChangeText = async (text: string) => {
    if (text && text !== '') {
      const objectToStore = { text, type };
      try {
        const searchHistoryRaw = await AsyncStorage.getItem('searchHistory');
        if (searchHistoryRaw) {
          const searchHistoryObj = JSON.parse(searchHistoryRaw);
          searchHistoryObj.data.unshift(objectToStore);
          if (searchHistoryObj.data.length > 10) {
            searchHistoryObj.data.pop();
          }
          await AsyncStorage.setItem('searchHistory', JSON.stringify(searchHistoryObj));
        } else {
          // First time, store the array with 1 position
          await AsyncStorage.setItem('searchHistory', JSON.stringify({ data: [objectToStore] }));
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  // Debounce function to call it every certain time
  const bouncedHandleOnChangeText = debounce(handleOnChangeText, 1500);

  return { bouncedHandleOnChangeText };
}

export default useAsyncSearchHistory;
