import useSWR from "swr";
import axios from "axios";
import { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { styled } from "nativewind";

const fetcher = (url: any) => axios.get(url).then((res) => res.data);

const StyledView = styled(View);
const StyledText = styled(Text);

export default function Page() {
  const { data, error } = useSWR(
    "https://api.reforged.world/v1/players",
    fetcher
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  if (error) return <StyledText>Error loading data</StyledText>;
  if (!data) return <StyledText>Loading...</StyledText>;

  const totalItems = data.players.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.players.slice(startIndex, endIndex);

  const renderItem = ({ item }: { item: any }) => (
    <StyledView key={item.username} className="flex-row justify-between p-2 border-b border-slate-600">
      <StyledText className="text-left text-white">{item.username}</StyledText>
      <StyledText className="text-right text-white">{item.primary_group}</StyledText>
    </StyledView>
  );

  return (
    <StyledView className="flex-1 bg-slate-800 p-8">
      <StyledText className="text-2xl font-bold text-white mb-4">Players</StyledText>
      <StyledView className="flex-row justify-between p-2 border-b-2 border-white">
        <StyledText className="font-bold text-white">Player</StyledText>
        <StyledText className="font-bold text-white">Group</StyledText>
      </StyledView>
      <FlatList
        data={currentItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.username}
      />
      <StyledView className="flex-row justify-between mt-4">
        <StyledView className="flex-1 mr-2">
          <StyledView className="bg-slate-900 p-1 rounded">
            <StyledText
              className={`text-center text-white ${currentPage === 1 ? 'opacity-50' : ''}`}
              onPress={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Sebelumnya
            </StyledText>
          </StyledView>
        </StyledView>
        <StyledText className="text-white my-auto">{`Halaman ${currentPage} dari ${totalPages}`}</StyledText>
        <StyledView className="flex-1 ml-2">
          <StyledView className="bg-slate-900 p-1 rounded">
            <StyledText
              className={`text-center text-white ${currentPage === totalPages ? 'opacity-50' : ''}`}
              onPress={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Berikutnya
            </StyledText>
          </StyledView>
        </StyledView>
      </StyledView>
    </StyledView>
  );
}