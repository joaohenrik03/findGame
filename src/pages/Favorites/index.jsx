import { useContext } from "react";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import Feather from 'react-native-vector-icons/Feather';
import { Card } from "../../components/Card";
import { Loading } from "../../components/Loading";
import { EmptyList, EmptyText, FavoritesContainer, FavoritesList } from "./styles";

export function Favorites() {
  const { favoriteGames, favoriteLoading } = useContext(FavoritesContext);

  if (favoriteGames.length === 0) {
    return (
      <EmptyList>
        <Feather name="alert-circle" size={36} color="#FFF" />
        <EmptyText>Empty favorites list!</EmptyText>
      </EmptyList>
    )
  }

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
