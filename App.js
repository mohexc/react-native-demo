import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableNativeFeedback, Button, Alert, Platform } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor: "#fff", flex: 1, flexDirection: "row" }}>
        <View style={{ backgroundColor: "dodgerblue", width: 100, height: 100 }}></View>
        <View style={{ backgroundColor: "gold", width: 100, height: 100 }}></View>
        <View style={{ backgroundColor: "tomato", width: 100, height: 100 }}></View>

      </View>
      <View style={{ backgroundColor: "#fff", flex: 1, flexDirection: "row-reverse" }}>
        <View style={{ backgroundColor: "dodgerblue", width: 100, height: 100 }}></View>
        <View style={{ backgroundColor: "gold", width: 100, height: 100 }}></View>
        <View style={{ backgroundColor: "tomato", width: 100, height: 100 }}></View>

      </View>
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ backgroundColor: "#fff", flex: 1, flexDirection: "column" }}>
          <View style={{ backgroundColor: "dodgerblue", width: 100, height: 100 }}></View>
          <View style={{ backgroundColor: "gold", width: 100, height: 100 }}></View>
          <View style={{ backgroundColor: "tomato", width: 100, height: 100 }}></View>

        </View>
        <View style={{ backgroundColor: "#fff", flex: 1, flexDirection: "column-reverse" }}>
          <View style={{ backgroundColor: "dodgerblue", width: 100, height: 100 }}></View>
          <View style={{ backgroundColor: "gold", width: 100, height: 100 }}></View>
          <View style={{ backgroundColor: "tomato", width: 100, height: 100 }}></View>

        </View>

      </View>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 50 : 0
  },
});
