import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import API_Screen_01 from "./view/API_Screen_01.js";
import API_Screen_02 from "./view/API_Screen_02.js";
import API_Screen_03 from "./view/API_Screen_03.js";
import API_Screen_04 from "./view/API_Screen_04.js";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="API_Screen_01">
        <Stack.Screen
          name="API_Screen_01"
          component={API_Screen_01}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="API_Screen_02"
          component={API_Screen_02}
          options={{
            headerTitle: "Shops Near Me",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  /* Xử lý sự kiện tìm kiếm */
                }}
              >
                <Icon
                  name="search"
                  style={{ marginRight: 40 }}
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="API_Screen_03"
          component={API_Screen_03}
          options={{
            headerTitle: "Drinks",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  /* Xử lý sự kiện tìm kiếm */
                }}
              >
                <Icon
                  name="search"
                  style={{ marginRight: 40 }}
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            ),
          }}
        />
          <Stack.Screen
          name="API_Screen_04"
          component={API_Screen_04}
          options={{
            headerTitle: "Your orders",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  /* Xử lý sự kiện tìm kiếm */
                }}
              >
                <Icon
                  name="search"
                  style={{ marginRight: 40 }}
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
