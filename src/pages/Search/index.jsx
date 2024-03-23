import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { api, apiKey } from "../../services/api";
import { Card } from "../../components/Card";
import { CategoryGamesList, SearchContainer } from "./styles";

export function Search() {
  const [categoryGames, setCategoryGames] = useState([]);
  const route = useRoute();
  const currentCategory = route.params.category.toLowerCase();

  useEffect(() => {
    async function loadGames() {
      const response = await api.get(`/games?&key=${apiKey}`, {
        params: {
          "genres": currentCategory,
          "page_size": 10
        }
      });

      setCategoryGames(response.data.results);
    }

    loadGames();
  }, []);

  return (
    <SearchContainer>
      <CategoryGamesList
        data={categoryGames}
        key={(item) => item.name}
        renderItem={({item}) => <Card data={item} />}
      />
    </SearchContainer>
  )
}
