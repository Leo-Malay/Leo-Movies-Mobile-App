import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Btn from '../Components/Button';
import {foreground, background, text} from '../color';
const AboutMe = ({navigation}) => {
  const styles = StyleSheet.create({
    container: {alignItems: 'center', backgroundColor: background, flex: 1},
    title: {
      fontSize: 40,
      fontWeight: 'bold',
      textAlign: 'center',
      width: 350,
      backgroundColor: foreground,
      margin: 50,
      padding: 5,
      color: text,
    },
    author: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      color: text,
    },
    version: {
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingTop: 20,
      color: text,
    },
    desc: {
      fontSize: 15,
      textAlign: 'center',
      padding: 10,
      marginBottom: 20,
      color: text,
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leo-Movie-App</Text>
      <Text style={styles.author}>By Malay Bhavsar</Text>
      <Text style={styles.author}>Email: malaybhavsar.290@gmail.com</Text>
      <Text style={styles.version}>Version: 1.0.0</Text>
      <Text style={styles.desc}>
        Hello and Welcome to my App. This app is made using React-Native
        framework. This app tells you about my favourite movies and leds you to
        their trailes if you ever want to watch them!
      </Text>
      <Btn
        props={{
          text: 'Back',
          onPress: () => navigation.goBack(),
          bgcolor: foreground,
          color: text,
        }}
        style={styles.backBtn}
      />
    </View>
  );
};

export default AboutMe;
