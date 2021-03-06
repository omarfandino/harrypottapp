import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, TextInput, TouchableOpacity, View } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { DefaultButton, Header, Separator, Typography } from '../../components';
import styles from './styles';

import { goToScreen } from '../../navigation/controls';
import { colors } from '../../utils/theme';
import useCharactersData from './hooks/useCharactersData';
import useAsyncSearchHistory from '../../utils/hooks/useAsyncSearchHistory';

const ListItem = ({ id, name, house }: { id: number; name: string; house: string }) => (
  <TouchableOpacity
    onPress={() => goToScreen('CharacterDetails', { id, name })}
    style={styles.listItemContainerShadow}
  >
    <View style={styles.listItemContainer}>
      <Typography numberOfLines={2} align="center" variant="bold">
        {name}
      </Typography>
      {house && (
        <Typography numberOfLines={2} align="center">
          {house || ''}
        </Typography>
      )}
    </View>
  </TouchableOpacity>
);

const flatlistKeyExtractor = (item: Character) => `${item.id}`;

const renderFlatlistItem = ({ item }: { item: Character }) => (
  <ListItem id={item.id} name={item.name} house={item.house} />
);

const CharactersListScreen = () => {
  const [search, setSearch] = useState('');
  const [charactersList, setCharactersList] = useState<Character[]>([]);
  const [refreshFlag, setRefreshFlag] = useState<boolean>(false);
  const { characters, loading, errorOccurred } = useCharactersData(refreshFlag);

  const { bouncedHandleOnChangeText } = useAsyncSearchHistory({ type: 'character' });

  const netInfo = useNetInfo();

  const toggleRefreshFlag = useCallback(() => {
    setRefreshFlag(!refreshFlag);
  }, [refreshFlag]);

  const handleSearch = (text: string) => {
    setSearch(text);
  };

  const filteredArray = () => {
    if (search.length === 0) {
      return characters;
    }
    return characters.filter((character) => character.name.toLowerCase().includes(search));
  };
  useEffect(() => {
    const filteredArrayData = filteredArray();
    setCharactersList(filteredArrayData);
  }, [search]);

  useEffect(() => {
    setCharactersList(characters);
  }, [characters]);

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
          placeholder="Search a character"
          underlineColorAndroid="transparent"
          placeholderTextColor={colors.wine}
          value={search}
          onChangeText={(text) => {
            bouncedHandleOnChangeText(text);
            handleSearch(text);
          }}
        />
      </View>
      <Separator size={10} />
      <Typography align="center" color={colors.wine} size={25} variant="bold">
        CHARACTERS
      </Typography>
      <Separator size={15} />
      <View style={styles.mainContainer}>
        <FlatList
          keyExtractor={flatlistKeyExtractor}
          refreshing={loading}
          onRefresh={toggleRefreshFlag}
          data={charactersList}
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

export default CharactersListScreen;
