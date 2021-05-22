import React from 'react';
import {StyleSheet, Text, View, Image, Linking} from 'react-native';
import {foreground, background, text} from '../color';
import Btn from '../Components/Button';

const Movie = props => {
  const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: background, alignItems: 'center'},
    title: {fontSize: 40, fontWeight: 'bold', color: text, padding: 20},
    subtitle: {fontSize: 15, color: text, width: 300, paddingBottom: 10},
    info: {fontSize: 20, fontWeight: 'bold', color: text},
  });
  let youtube_url =
    'https://www.youtube.com/watch?v=' + props.route.params.trailersrc;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.route.params.name}</Text>
      <Text style={styles.subtitle}>{props.route.params.plot}</Text>
      <Text style={styles.info}>Category: {props.route.params.category}</Text>
      <Text style={styles.info}>Rating: {props.route.params.rating}/5</Text>
      <Btn
        props={{
          text: 'Watch Trailer on YouTube',
          onPress: () => Linking.openURL(youtube_url),
          bgcolor: foreground,
          color: text,
        }}
      />
    </View>
  );
};

export default Movie;
