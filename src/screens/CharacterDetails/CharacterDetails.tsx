import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Image, View } from 'react-native';

import { Header, Typography } from '../../components';
import { getCharacterById } from '../../services';

import styles from './styles';
import { colors } from '../../utils/theme';
//import { placeholder } from '../../assets/images/no-image.png';

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
        setCharacter(data[0]);
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
        <Header />
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
        <View style={styles.titleContainer}>
          <View style={styles.typoContainer}>
            <Typography
              size={23}
              color={colors.wine}
              align={'center'}
              numberOfLines={2}
              variant={'bold'}
            >
              {character?.name}
            </Typography>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.coverBooksContainer}>
            <Image source={require('../../assets/images/no-image.png')} style={styles.coverBooks} />
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.textContainer}>
              <Typography variant={'bold'}>Birth : </Typography>
              <Typography>{character?.birth}</Typography>
            </View>
            <View style={styles.textContainer}>
              <Typography variant={'bold'}>Gender :</Typography>
              <Typography> {character?.gender}</Typography>
            </View>
            <View style={styles.textContainer}>
              <Typography variant={'bold'}>House : </Typography>
              <Typography>{character?.house}</Typography>
            </View>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste itaque tempore
            perferendis magnam explicabo. Itaque voluptates accusantium doloremque optio veniam,
            quae excepturi amet facilis at libero voluptas tempore, iure rem.
          </Typography>
        </View>
      </View>
    </>
  );
};

export default CharacterDetailsScreen;
