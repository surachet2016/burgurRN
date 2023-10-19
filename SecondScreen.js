import React from 'react';
import { View, Text } from 'react-native';
import globalStyles from "./globalStyles";

function SecondScreen() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.mytext}>Second Screen</Text>
    </View>
  );
}

export default SecondScreen;
