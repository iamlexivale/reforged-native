import {
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
  createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

function TabBarIcon({ name, color }) {
  return <FontAwesome size={24} name={name} color={color} />;
}

export default function TabLayout() {
  return (
    <MaterialTopTabs
      screenOptions={{
        tabBarActiveTintColor: "#f8fafc",
        tabBarInactiveTintColor: "#94a3b8",
        tabBarStyle: { backgroundColor: '#0f172a', borderColor: '#020617' },
        tabBarIndicatorStyle: { backgroundColor: "#f8fafc" },
      }}
    >
      <MaterialTopTabs.Screen
        name="index"
        options={{
          title: "Player",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />
        }}
      />
      <MaterialTopTabs.Screen
        name="town"
        options={{
          title: "Town",
          tabBarIcon: ({ color }) => <TabBarIcon name="building" color={color} />
        }}
      />
      <MaterialTopTabs.Screen
        name="nation"
        options={{
          title: "Nation",
          tabBarIcon: ({ color }) => <TabBarIcon name="globe" color={color} />
        }}
      />
    </MaterialTopTabs>
  );
}
