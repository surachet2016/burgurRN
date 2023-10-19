import React from "react";
import { View, Text } from "react-native";
import globalStyles from "./globalStyles";

function HomeScreen() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.mytext}>Home Screen</Text>
    </View>
  );
}

export default HomeScreen;
