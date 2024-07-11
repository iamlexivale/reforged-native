import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#f8fafc", tabBarStyle: { backgroundColor: '#0f172a', borderColor: '#020617' } }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: "Stats",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: '#0f172a' },
          headerTintColor: 'white',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="pie-chart" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="leaderboard"
        options={{
          title: "Leaderboard",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: '#0f172a' },
          headerTintColor: 'white',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="trophy" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
