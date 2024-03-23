import { useEffect, useState } from "react";
import { api, apiKey } from "../../services/api";
import { Header } from "./components/Header";
import { SearchGame } from "./components/SearchGame";
import { CategoryItem } from "./components/CategoryItem";
import { TrendingGames } from "./components/TrendingGames";
import { 
  CategoryList,
  HomeContainer, 
} from "./styles";

export function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const response = await api.get(`/genres?key=${apiKey}`);
      setCategories(response.data.results);
    }

    loadCategories();
  }, [setCategories]);

  return (
    <HomeContainer>
      <Header />

      <SearchGame />

      <CategoryList 
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <CategoryItem data={item} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />

      <TrendingGames />
    </HomeContainer>
  )
}
