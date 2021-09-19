import React, { useCallback, useState } from 'react';
import { ActivityIndicator, FlatList, TextInput, TouchableOpacity, View } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { DefaultButton, Header, Separator, Typography } from '../../components';
import styles from './styles';

import { goToScreen } from '../../navigation/controls';
import { colors } from '../../utils/theme';
import useCharactersData from './hooks/useCharactersData';

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
  const [refreshFlag, setRefreshFlag] = useState<boolean>(false);
  const { characters, loading, errorOccurred } = useCharactersData(refreshFlag);

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
          placeholder="Search a character"
          underlineColorAndroid="transparent"
          placeholderTextColor={colors.wine}
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
          data={characters}
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
