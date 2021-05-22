import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import Btn from '../Components/Button';
import {foreground, background, text} from '../color';
import MovieCard from '../Components/Card';
import data from '../data.json';
const MovieList = ({navigation}) => {
  const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: background, alignItems: 'center'},
  });
  const ListArr = data.map((ele, i) => (
    <MovieCard
      key={i}
      props={{
        data: ele,
        onPress: () => {
          navigation.navigate('Movie', ele);
        },
      }}
    />
  ));
  return (
    <View style={styles.container}>
      <ScrollView>{ListArr}</ScrollView>
      <Btn
        props={{
          text: 'Back',
          onPress: () => navigation.goBack(),
          bgcolor: foreground,
          color: text,
        }}
      />
    </View>
  );
};

export default MovieList;
