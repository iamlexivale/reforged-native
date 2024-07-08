import useSWR from "swr";
import axios from "axios";
import { View, Text, StyleSheet } from "react-native";

const fetcher = (url: any) => axios.get(url).then((res) => res.data);

export default function Tab() {
  const { data: network } = useSWR(
    "https://api.reforged.world/v1/network",
    fetcher
  );

  return (
    <View style={styles.container}>
      <Text>{network?.network?.players_online} Players Online</Text>
      <Text>{network?.network?.players_registered} Players Registered</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
