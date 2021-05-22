import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Btn from '../Components/Button';
import {background, foreground, text} from '../color';
const Home = ({navigation}) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: background,
      alignItems: 'center',
      flex: 1,
    },
    title: {
      fontSize: 50,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 5,
      margin: 50,
      width: 350,
      color: text,
      backgroundColor: foreground,
    },
    subtitle: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      color: text,
    },
    screenBottom: {flex: 1, justifyContent: 'flex-end', marginBottom: 36},
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leo-Movies</Text>
      <Text style={styles.subtitle}>All favourite movies of Malay Bhavsar</Text>
      <Text style={styles.subtitle}>Made with 💛 by Malay :)</Text>
      <View style={styles.screenBottom}>
        <Btn
          props={{
            text: 'Movies',
            onPress: () => navigation.navigate('MovieList'),
          }}
        />
        <Btn
          props={{
            text: 'About Me',
            onPress: () => navigation.navigate('AboutMe'),
          }}
        />
      </View>
    </View>
  );
};

export default Home;
