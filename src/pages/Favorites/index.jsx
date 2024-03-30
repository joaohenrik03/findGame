import { useContext } from "react";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import { Card } from "../../components/Card";
import { Loading } from "../../components/Loading";
import { FavoritesContainer, FavoritesList } from "./styles";

export function Favorites() {
  const { favoriteGames, favoriteLoading } = useContext(FavoritesContext);

  return (
    <FavoritesContainer>
      {favoriteLoading ? (
        <Loading size={64} />
      ) : (
        <FavoritesList
          data={favoriteGames}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Card data={item} typeCard={'favorites'} />}
        />
      )}
    </FavoritesContainer>
  )
}
