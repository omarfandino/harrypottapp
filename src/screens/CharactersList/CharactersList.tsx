import React from 'react';
import { View } from 'react-native';
import { Header, Typography } from '../../components';
import styles from './styles';

const CharactersListScreen = () => {
  return (
    <>
      <Header showBackButton={false} title="Characters" />
      <View style={styles.mainContainer}>
        <Typography size={18}>Characters List</Typography>
      </View>
    </>
  );
};

export default CharactersListScreen;
