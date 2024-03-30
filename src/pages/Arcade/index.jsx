import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { api, apiKey } from "../../services/api";
import { Card } from "../../components/Card";
import { Loading } from "../../components/Loading";
import { CategoryGamesList, ArcadeContainer } from "./styles";

export function Arcade() {
  const [categoryGames, setCategoryGames] = useState([]);
  const route = useRoute();
  const currentCategory = route.params.category.toLowerCase();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadGames() {
      setLoading(true);

      try {
        const response = await api.get(`/games?&key=${apiKey}`, {
          params: {
            "genres": currentCategory,
            "page_size": 10
          }
        });
  
        setCategoryGames(response.data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    loadGames();
  }, []);

  return (
    <ArcadeContainer>
      {loading ? (
        <Loading size={64} />
      ) : (
        <CategoryGamesList
          data={categoryGames}
          key={(item) => item.id}
          renderItem={({ item }) => <Card data={item} />}
        />
      )}
    </ArcadeContainer>
  )
}
