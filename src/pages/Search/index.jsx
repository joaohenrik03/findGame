import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { api } from "../../services/api";
import { Card } from "../../components/Card";
import { Loading } from "../../components/Loading";
import { ListGames, SearchContainer } from "./styles";

export function Search() {
  const [gameList, setGameList] = useState([]);
  const route = useRoute();
  const { searchText } = route.params;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadGames() {
      setLoading(true);

      try {
        const response = await api.get(`/games?&key=be3fbb9327204919be6fc363f1b415af`, {
          params: {
            search: searchText,
            page_size: 10,
            ordering: '-rating'
          }
        })
  
        setGameList(response.data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }  

    loadGames();
  }, []);

  return (
    <SearchContainer>
      {loading ? (
        <Loading size={64} />
      ) : (
        <ListGames
          data={gameList}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Card data={item} />}
        />
      )}
    </SearchContainer>
  )
}
