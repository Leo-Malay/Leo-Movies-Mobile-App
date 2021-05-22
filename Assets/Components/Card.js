import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {foreground} from '../color';
const MovieCard = ({props}) => {
  const styles = StyleSheet.create({
    btn_container: {
      alignSelf: 'center',
      margin: 10,
      width: 300,
      backgroundColor: props.bgcolor || foreground,
    },
    btn_text: {
      textAlign: 'center',
      fontSize: 15,
      fontWeight: 'bold',
      color: props.color || '#fff',
      padding: 10,
    },
  });

  return (
    <TouchableOpacity onPress={props.onPress} style={styles.btn_container}>
      <Text style={styles.btn_text}>{props.data.name}</Text>
    </TouchableOpacity>
  );
};
export default MovieCard;
