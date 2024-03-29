import { useContext } from "react";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import { Card } from "../../components/Card";
import { FavoritesContainer, FavoritesList } from "./styles";

export function Favorites() {
  const { favoriteGames } = useContext(FavoritesContext);

  return (
    <FavoritesContainer>
      <FavoritesList
        data={favoriteGames}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Card data={item} typeCard={'favorites'} />}
      />
    </FavoritesContainer>
  )
}
