import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { Theme } from '../config/theme';
import moment from 'moment';

interface NewsDetailProps {
  route?: any
}

const NewsDetailsScreen = (props: NewsDetailProps) => {
  const { urlToImage, description, author, publishedAt, title } = props.route.params?.item;

  const { theme } = useContext(ThemeContext);
  const activeColors = Theme[theme.mode];
  const formattedDate = moment(publishedAt).format('MMMM DD, YYYY');

  return (
    <View style={[styles.container, { backgroundColor: activeColors.primary }]}>
      <Image source={{ uri: urlToImage }} style={styles.image} />
      <Text style={[styles.title, { color: activeColors.tint }]}>{title}</Text>
      <Text style={[styles.description, { color: activeColors.tint }]}>{description}</Text>
      <View style={styles.infoContainer}>
        <Text style={[styles.author, { color: activeColors.tint }]}>{author}</Text>
        <Text style={[styles.date, { color: activeColors.tint }]}>{formattedDate}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
    borderRadius: 8
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  author: {
    fontSize: 14,
    fontWeight: 'bold',
    maxWidth: 200,
  },
  date: {
    fontSize: 14,
  },
});

export default NewsDetailsScreen;
