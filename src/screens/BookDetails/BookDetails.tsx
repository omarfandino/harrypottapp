import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Image, View } from 'react-native';

import { Header, Typography } from '../../components';
import { getBookById } from '../../services';

import useBooksData from '../BooksList/hooks/useBooksData';

import styles from './styles';
import { colors } from '../../utils/theme';

// @ts-ignore
const BookDetailsScreen = ({ route }) => {
  const { id, title } = route.params;

  const { books } = useBooksData();
  const [book, setBook] = useState<any | null>(null);
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

  console.log('BOOKS DAVID', books);

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

  const bookCover =
    book[0].book_covers.length && book[0].book_covers[0].URL
      ? book[0].book_covers[0].URL
      : require('../../assets/images/no-image.png');
  const image: any = { uri: bookCover };

  return (
    <>
      <Header />
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
              {book[0]?.title}
            </Typography>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.coverBooksContainer}>
            <Image source={image} style={styles.coverBooks} />
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.textContainer}>
              <Typography variant={'bold'}>Author : </Typography>
              <Typography>{book[0]?.author}</Typography>
            </View>
            <View style={styles.textContainer}>
              <Typography variant={'bold'}>Publish Date :</Typography>
              <Typography> {book[0]?.publish_date[0].UK}</Typography>
            </View>
            <View style={styles.textContainer}>
              <Typography variant={'bold'}>Plot Take-place years : </Typography>
              {book[0].plot_take_place_years.map((year: string) => (
                <Typography>{year} </Typography>
              ))}
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
        <View style={styles.footerContainer}>
          <Typography size={15} variant={'bold'} align={'right'}>
            Other Books
          </Typography>
        </View>
      </View>
    </>
  );
};

export default BookDetailsScreen;
