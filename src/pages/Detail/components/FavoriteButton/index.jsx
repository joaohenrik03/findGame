import { useContext } from 'react';
import { FavoritesContext } from '../../../../contexts/FavoritesContext';
import Feather from 'react-native-vector-icons/Feather';
import { FavoriteButtonContainer } from './styles';

export function FavoriteButton({gameData}) {
  const { handleAddGameToFav } = useContext(FavoritesContext);

  return (
    <FavoriteButtonContainer onPress={() => handleAddGameToFav(gameData)}>
      <Feather 
        name="bookmark" 
        size={32} 
        color="#FFF" 
      />   
    </FavoriteButtonContainer>
  )
}
