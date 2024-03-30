import { useEffect, useState } from "react";
import { api, apiKey } from "../../services/api";
import { Header } from "./components/Header";
import { SearchGame } from "./components/SearchGame";
import { CategoryItem } from "./components/CategoryItem";
import { TrendingGames } from "./components/TrendingGames";
import { Loading } from "../../components/Loading";
import { 
  CategoryList,
  CategoryListContainer,
  HomeContainer,
  LoadingContainer, 
} from "./styles";

export function Home() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    async function loadCategories() {
      try {
        const response = await api.get(`/genres?key=${apiKey}`);
        setCategories(response.data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    loadCategories();
  }, [setCategories]);

  return (
    <HomeContainer>
      <Header />

      <SearchGame />

      {loading ? (
          <LoadingContainer>
            <Loading size={24} />
          </LoadingContainer>
        ) : (
          <CategoryList
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <CategoryItem data={item} />}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        )}

      <TrendingGames />
    </HomeContainer>
  )
}
