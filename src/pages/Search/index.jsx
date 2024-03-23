import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { api } from "../../services/api";
import { Card } from "../../components/Card";
import { ListGames, SearchContainer } from "./styles";

export function Search() {
  const [gameList, setGameList] = useState([]);
  const route = useRoute();
  const { searchText } = route.params;

  useEffect(() => {
    async function loadGames() {
      const response = await api.get(`/games?&key=be3fbb9327204919be6fc363f1b415af`, {
        params: {
          search: searchText,
          page_size: 10,
          ordering: '-rating'
        }
      })

      setGameList(response.data.results);
    }  

    loadGames();
  }, []);

  return (
    <SearchContainer>
      <ListGames
        data={gameList}
        keyExtractor={item => item.name}
        renderItem={({item}) => <Card data={item} />}
      />   
    </SearchContainer>
  )
}
