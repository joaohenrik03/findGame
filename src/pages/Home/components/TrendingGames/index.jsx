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
  const [totalPages ,setTotalPages] = useState(5);

  useEffect(() => {
    setLoading(true);

    async function loadTrendingGames() {
      try {
        const response = await api.get(`/games?&key=${apiKey}`, {
          params: {
            "ordering": "-rating",
            "page_size": totalPages,
          }
        })
  
        setTopRatedGames(response.data.results);
        setTotalPages(oldValue => oldValue + 5);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    loadTrendingGames();
  }, [setTopRatedGames]);

  async function handleLoadMoreGames() {
    try { 
      const response = await api.get(`/games?&key=${apiKey}`, {
        params: {
          "ordering": "-rating",
          "page_size": totalPages,
        }
      })

      setTopRatedGames(response.data.results);
        setTotalPages(oldValue => oldValue + 5);
      } catch (error) {
      console.log(error);
    }
  };

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
          onEndReached={handleLoadMoreGames}
        />
      )}
    </TrendingGamesContainer>
  )
}
