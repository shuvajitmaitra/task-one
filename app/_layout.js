import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import HomePage from "./(tabs)";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)" options={
            {
                headerShown: false
            }
        }/>
    </Stack>
  );
}
