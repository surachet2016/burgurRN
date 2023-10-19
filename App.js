import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./HomeScreen";
import SecondScreen from "./SecondScreen";
import ThirdScreen from "./ThirdScreen";
import { AntDesign } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home Screen"
          component={HomeScreen}
          options={{
            drawerLabel: "Home",

            headerStyle: {
              backgroundColor: "#f4511e", //Set Header color
            },
            headerTintColor: "#fff", //Set Header text color
            headerTitleStyle: {
              fontWeight: "bold", //Set Header text style
            },
            drawerIcon: () => <AntDesign name="home" size={24} color="black" />,
          }}
        />
        <Drawer.Screen
          name="Second Screen"
          component={SecondScreen}
          options={{
            drawerLabel: "Scecond",
            headerStyle: {
              backgroundColor: "#f4511e", //Set Header color
            },
            headerTintColor: "#fff", //Set Header text color
            headerTitleStyle: {
              fontWeight: "bold", //Set Header text style
            },
            drawerIcon: () => <AntDesign name="book" size={24} color="black" />,
          }}
        />
        <Drawer.Screen
          name="Third Screen"
          component={ThirdScreen}
          options={{
            drawerLabel: "Third",
            headerStyle: {
              backgroundColor: "#f4511e", //Set Header color
            },
            headerTintColor: "#fff", //Set Header text color
            headerTitleStyle: {
              fontWeight: "bold", //Set Header text style
            },
            drawerIcon: () => <AntDesign name="linechart" size={24} color="black" />,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
