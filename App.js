import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// User defined Views
import Home from './Assets/Views/Home';
import Movie from './Assets/Views/Movie';
import MovieList from './Assets/Views/MovieList';
import AboutMe from './Assets/Views/AboutMe';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MovieList"
          component={MovieList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Movie"
          component={Movie}
          options={{title: 'Movie'}}
        />
        <Stack.Screen
          name="AboutMe"
          component={AboutMe}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
