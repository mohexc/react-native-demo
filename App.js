import React from 'react';
import { StyleSheet, Platform, View } from 'react-native';
import Styleling from './app/screens/Styleling';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import AppText from './app/components/AppText/AppText';
import MessageScreen from './app/screens/MessageScreen';
export default function App() {
  debugger
  return (
    <View style={styles.container}>
      {/* <MaterialCommunityIcons name="email" size={60} color="dodgerblue" /> */}
      {/* // <ViewImageScreen />
    // <WelcomeScreen /> */}
      {/* <Styleling /> */}
      {/* <AppText>I love react-natives</AppText> */}
      <MessageScreen />
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
});
