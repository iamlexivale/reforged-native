import useSWR from "swr";
import axios from "axios";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { styled } from "nativewind";

const fetcher = (url: any) => axios.get(url).then((res) => res.data);

const StyledView = styled(View);
const StyledText = styled(Text);

export default function Page() {
  const { data, error } = useSWR(
    "https://api.reforged.world/v1/leaderboard/players",
    fetcher
  );

  if (error) return <StyledText>Error loading data</StyledText>;
  if (!data) return <StyledText>Loading...</StyledText>;

  const renderItem = ({ item }: { item: any }) => (
    <StyledView key={item.town} className="flex-row justify-between p-2 border-b border-slate-600">
      <StyledText className="text-left text-white">{item.player}</StyledText>
      <StyledText className="text-right text-white">{item.coins.toFixed(0)}</StyledText>
    </StyledView>
  );

  return (
    <StyledView className="flex-1 bg-slate-800 p-8">
      <StyledText className="text-2xl font-bold text-white mb-4">Players</StyledText>
      <StyledView className="flex-row justify-between p-2 border-b-2 border-white">
        <StyledText className="font-bold text-white">Player</StyledText>
        <StyledText className="font-bold text-white">Coins</StyledText>
      </StyledView>
      <FlatList
        data={data.players}
        renderItem={renderItem}
        keyExtractor={(item) => item.player}
      />
    </StyledView>
  );
}
