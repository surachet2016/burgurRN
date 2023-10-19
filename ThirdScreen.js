import React from "react";
import { View, Text } from "react-native";
import globalStyles from "./globalStyles";

function ThirdScreen() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.mytext}>Third Screen</Text>
    </View>
  );
}

export default ThirdScreen;
