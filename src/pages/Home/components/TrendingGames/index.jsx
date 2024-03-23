import { useEffect, useState } from "react";
import { api, apiKey } from "../../../../services/api";
import { Card } from "../../../../components/Card";
import { 
  TrendingGamesContainer, 
  TrendingGamesList, 
  TrendingGamesTitle 
} from "./styles";

export function TrendingGames() {
  const [topRatedGames, setTopRatedGames] = useState([]);

  useEffect(() => {
    async function loadTrendingGames() {
      const response = await api.get(`/games?&key=${apiKey}`, {
        params: {
          "ordering": "-rating",
          "page_size": 5,
        }
      })

      setTopRatedGames(response.data.results);
    }

    loadTrendingGames();
  }, [setTopRatedGames])

  return (
    <TrendingGamesContainer>
      <TrendingGamesTitle>
        Trending games

      </TrendingGamesTitle>

      <TrendingGamesList
        data={topRatedGames}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Card data={item} />}
      />
    </TrendingGamesContainer>
  )
}
