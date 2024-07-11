import useSWR from "swr";
import axios from "axios";
import { View, Text } from "react-native";
import { styled } from "nativewind";

const fetcher = (url: any) => axios.get(url).then((res) => res.data);

const StyledView = styled(View);
const StyledText = styled(Text);

export default function Tab() {
  const { data: network } = useSWR(
    "https://api.reforged.world/v1/network",
    fetcher,
  );

  return (
    <StyledView className="flex-1 justify-center items-center bg-slate-800">
      <StyledView className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />
      <StyledView className="items-center space-y-8 py-32">
        <StyledView className="space-y-2">
          <StyledText className="text-center text-8xl font-bold text-white">
            Reforged
          </StyledText>
          <StyledText className="text-center text-2xl font-medium text-white text-opacity-75">
            Where Every Block Tells a Story
          </StyledText>
          <StyledText className="text-center text-sm font-normal italic text-white text-opacity-75">
            {network?.network?.players_registered || 0} players have joined...
          </StyledText>
        </StyledView>
        <StyledView className="rounded bg-slate-950 px-8 py-1.5 text-center text-base font-medium text-white shadow-lg shadow-slate-900">
          <StyledText className="text-base font-medium text-white">
            play.reforged.world
          </StyledText>
        </StyledView>
      </StyledView>
    </StyledView>
  );
}
