import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, View } from 'react-native';

import { Header, Separator, Typography } from '../../components';
import { getCharacterById } from '../../services';

import styles from './styles';
import { colors } from '../../utils/theme';

// @ts-ignore
const CharacterDetailsScreen = ({ route }) => {
  const { id, title } = route.params;

  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getCharactersData = async () => {
    setLoading(true);
    try {
      const { success, data } = await getCharacterById(id);
      if (success) {
        setCharacter(data);
      } else {
        Alert.alert(`Error getting the details of the book: ${title}`);
      }
    } catch (error) {
      console.log(`Error getting book with id: ${id} in BookDetailsScreen`, error);
      Alert.alert(`Error getting the details of the book: ${title}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCharactersData();
  }, []);

  if (loading) {
    return (
      <>
        <Header title={title} />
        <View style={styles.wholeScreenCenter}>
          <ActivityIndicator size="large" color={colors.wine} />
        </View>
      </>
    );
  }

  return (
    <>
      <Header title={title} />
      <View style={styles.mainContainer}>
        <Typography size={18}>Character Detail Screen</Typography>
        <Separator />
        <Typography>{JSON.stringify(character, null, 2)}</Typography>
      </View>
    </>
  );
};

export default CharacterDetailsScreen;
