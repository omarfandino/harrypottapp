import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, View } from 'react-native';

import { Header, Separator, Typography } from '../../components';
import { getBookById } from '../../services';

import styles from './styles';
import { colors } from '../../utils/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

// @ts-ignore
const BookDetailsScreen = ({ route }) => {
  const { id, title } = route.params;

  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getBooksData = async () => {
    setLoading(true);
    try {
      const { success, data } = await getBookById(id);
      if (success) {
        setBook(data);
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
    getBooksData();
  }, []);

  useEffect(() => {
    console.log('starting');
    const asyncFunction = async () => {
      try {
        console.log('getting');
        const books = await AsyncStorage.getItem('storagedBooks');
        console.log(books);
        if (books && books.length) {
          console.log('there are books');
          let fromAsyncToArray = books.split(',');
          console.log(fromAsyncToArray);
          let expression = [`${id}`, ...fromAsyncToArray];
          expression = [...new Set(expression)];
          expression.join(',');
          console.log('adding ', expression);
          await AsyncStorage.setItem('storagedBooks', `${expression}`);
        } else {
          // First time
          console.log(`no books, adding ${id}`);
          await AsyncStorage.setItem('storagedBooks', `${id}`);
        }
      } catch (error) {
        console.error(error);
      }
    };
    asyncFunction();
  }, [id]);

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
        <Typography size={18}>Book Detail Screen</Typography>
        <Separator />
        <Typography>{JSON.stringify(book, null, 2)}</Typography>
      </View>
    </>
  );
};

export default BookDetailsScreen;
