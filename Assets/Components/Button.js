import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {background, foreground} from '../color';
const Btn = ({props}) => {
  const styles = StyleSheet.create({
    btn_container: {
      alignSelf: 'center',
      margin: 10,
      width: 300,
      backgroundColor: props.bgcolor || foreground,
      borderRadius: 50,
    },
    btn_text: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      color: props.color || '#fff',
      padding: 10,
    },
  });

  return (
    <TouchableOpacity onPress={props.onPress} style={styles.btn_container}>
      <Text style={styles.btn_text}>{props.text}</Text>
    </TouchableOpacity>
  );
};
export default Btn;
