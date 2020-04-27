
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import Router from './Router';


const App= () => {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <Router />
      </SafeAreaView>
    </NavigationContainer>
  );
};


export default App;
