import { useEffect, useState } from "react";
import { api, apiKey } from "../../../../services/api";
import { Card } from "../../../../components/Card";
import { Loading } from "../../../../components/Loading";
import { 
  TrendingGamesContainer, 
  TrendingGamesList, 
  TrendingGamesTitle 
} from "./styles";

export function TrendingGames() {
  const [topRatedGames, setTopRatedGames] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    async function loadTrendingGames() {
      try {
        const response = await api.get(`/games?&key=${apiKey}`, {
          params: {
            "ordering": "-rating",
            "page_size": 5,
          }
        })
  
        setTopRatedGames(response.data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    loadTrendingGames();
  }, [setTopRatedGames]);

  return (
    <TrendingGamesContainer>
      <TrendingGamesTitle>
        Trending games

      </TrendingGamesTitle>

      {loading ? (
        <Loading size={64} />
      ) : (
        <TrendingGamesList
          data={topRatedGames}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <Card data={item} />}
        />
      )}
    </TrendingGamesContainer>
  )
}
