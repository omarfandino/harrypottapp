import React from 'react';
import { View } from 'react-native';
import { Header, Typography } from '../../components';
import styles from './styles';

const BooksListScreen = () => {
  return (
    <>
      <Header showBackButton={false} title="Books" />
      <View style={styles.mainContainer}>
        <Typography size={18}>Books List</Typography>
      </View>
    </>
  );
};

export default BooksListScreen;
