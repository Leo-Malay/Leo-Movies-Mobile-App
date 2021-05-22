import React from 'react';
import {StyleSheet, ScrollView, Text, View} from 'react-native';
import Btn from '../Components/Button';
import {foreground, background, text} from '../color';
import MovieCard from '../Components/Card';
import data from '../data.json';
const MovieList = ({navigation}) => {
  const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: background, alignItems: 'center'},
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 5,
      margin: 10,
      width: 350,
      color: text,
      backgroundColor: foreground,
    },
    sv: {margin: 10},
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
      <Text style={styles.title}>List of Movies :)</Text>
      <ScrollView style={styles.sv}>{ListArr}</ScrollView>
      <Btn
        props={{
          text: 'Back',
          onPress: () => navigation.goBack(),
          bgcolor: foreground,
          color: text,
        }}
        style={styles.button}
      />
    </View>
  );
};

export default MovieList;
