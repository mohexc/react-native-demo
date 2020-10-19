import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import Styleling from './app/screens/Styleling';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
    // <ViewImageScreen />
    // <WelcomeScreen />
    <Styleling />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 50 : 0
  },
});
