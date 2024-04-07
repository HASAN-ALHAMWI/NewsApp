// Native import
import React, { useContext, useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  TextInput,
} from 'react-native';

// Redux import
import { useSelector } from 'react-redux';

// Component import
import NewsCard from '../components/NewsCard';

// Config import
import * as TextConstants from '../constants/TextConstants';

// Style import
import { newsScreenStyles as styles } from '../styles/NewsScreenStyles';

// Context import
import { Context as NewsContext } from '../context/newsContext';
import useTranslations from '../hooks/useTranslations';
import { EmptyListView } from '../components/EmptyView';

// Library import
import useNavigation from '../hooks/useNavigation';
import { Theme } from '../config/theme';
import { ThemeContext } from '../context/ThemeContext';
import { NEWS_DETAILS_SCREEN } from '../constants/ScreenConstants';

// Define the prop types for the News screen
interface INewsScreen { }

const NewsScreen = (props: INewsScreen) => {
  // State variables for loading and page index
  const [loading, setLoading] = useState(false);
  const [translate] = useTranslations();

  const { theme } = useContext(ThemeContext);
  const activeColors = Theme[theme.mode];

  // Get the NewsContext and Redux data
  const { getNewsAPI } = useContext(NewsContext);
  const news = useSelector((state: any) => state?.newsReducer?.news);

  const [NewsData, SetNewsData] = useState(news);
  const [filteredNewsData, setFilteredNewsData] = useState(news); // State for filtered data

  // State variable for refreshing
  const [refreshing, setRefreshing] = useState(false);
  const { replace, navigate } = useNavigation();

  //==============================================================================
  //        Start :  Logical Method
  //==============================================================================

  // Initial data loading when the component mounts
  useEffect(() => {
    setLoading(true);

    // Call the API with the initial pageIndex
    getNewsAPI &&
      getNewsAPI().then((res: any) => {
        setLoading(false);
        SetNewsData([...res?.data?.articles]);
        setFilteredNewsData([...res?.data?.articles]); // Initialize filtered data
      });
  }, []);

  const onRefresh = () => {
    setRefreshing(true);

    // Call the API with the updated pageIndex
    getNewsAPI &&
      getNewsAPI().then((res: any) => {
        setRefreshing(false);
        SetNewsData([...res?.data?.articles]);
        setFilteredNewsData([...res?.data?.articles]); // Refresh filtered data
      });
  };

  // Filtering logic based on search text
  const handleSearch = (text: string) => {
    const filteredData = NewsData.filter((item: any) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredNewsData(filteredData);
  };

  //==============================================================================
  //        End:  Logical Method
  //==============================================================================

  //==============================================================================
  //        Start :  UI Render Methods
  //==============================================================================

  const renderEmptyList = (message: string) => {
    if (loading) return;
    return (
      <View style={styles.emptyListStyle}>
        <EmptyListView emptyListMessage={translate(message)} />
      </View>
    );
  };

  const itemPressed = (item: any) => {
    navigate(NEWS_DETAILS_SCREEN, { item: item });
  }

  const renderNewsItem = (item: any) => {
    if (item?.title === '[Removed]') return null;
    return (
      <NewsCard
        title={item?.title}
        imageUrl={item?.urlToImage}
        onItemPressed={() => itemPressed(item)}
      />
    );
  }

  const renderScreenContent = () => {
    return (
      <View>
        <TextInput
          style={[styles.searchBar, {
            backgroundColor: activeColors.secondary,
            color: activeColors.tint, 
            borderColor: activeColors.accent,
          }]}
          placeholder={translate(TextConstants.SEARCH_HERE)}
          placeholderTextColor={activeColors.accent}
          onChangeText={handleSearch}
        />
        <FlatList
          data={filteredNewsData} // Use filtered data for rendering
          renderItem={({ item }) => renderNewsItem(item)}
          keyExtractor={(item: any, index: number) => index.toString()}
          ListEmptyComponent={() =>
            renderEmptyList(TextConstants.DATA_NOT_AVAILABLE)
          }
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor={activeColors.tint}
            />
          }
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={[styles.root, { backgroundColor: activeColors.primary }]}>
      {renderScreenContent()}
      {loading ? <ActivityIndicator /> : null}
    </SafeAreaView>
  );
};

//==============================================================================
//          End :  UI Render Methods
//==============================================================================

export default NewsScreen;
