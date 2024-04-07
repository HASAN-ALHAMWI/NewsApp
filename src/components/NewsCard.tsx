import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Theme } from '../config/theme';
import { ThemeContext } from '../context/ThemeContext';

// Config import
import { getDeviceDimensions } from "../utils/Device";

const width = getDeviceDimensions().width;

interface NewsCardProps {
  title: string;
  imageUrl: string;
  onItemPressed?: () => void;
}


const NewsCard: React.FC<NewsCardProps> = ({ title, imageUrl, onItemPressed }) => {

  const { theme } = useContext(ThemeContext);
  const activeColors = Theme[theme.mode];

  return (
    <TouchableOpacity onPress={onItemPressed}>
      <View style={[styles.container, { backgroundColor: activeColors.secondary }]}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={[styles.title, { color: activeColors.tint }]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width - 28,
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NewsCard;
