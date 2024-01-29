import React from 'react'
import { Tabs } from 'expo-router'

const TabLayout = () => {
  return (
    <Tabs>
    <Tabs.Screen
      name="index"
      options={{
        headerTitle: "Home Page",
        title: "Home",
        headerStyle: {
          backgroundColor: "salmon",
        },
      }}
    />
    <Tabs.Screen
      name="users/[id]"
      options={{
        headerTitle: "User Page",
        title: "User",
        headerStyle: {
          backgroundColor: "lightgreen",
        },
      }}
    />
  </Tabs>
  )
}

export default TabLayout