import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import Feather from 'react-native-vector-icons/Feather';
import { 
  CardContainer, 
  GameDataBox, 
  Image, 
  Name, 
  Rating,
  RemoveGameToFav, 
} from "./styles";

export function Card({data, typeCard}) {
  const { navigate } = useNavigation();
  const { handleRemoveGameToFav } = useContext(FavoritesContext);

  return (
    <CardContainer onPress={() => navigate('Detail', { gameData: data })}>
      <Image
        source={
          data.background_image ? { uri: data.background_image } : require('../../assets/default-bg.jpg')
        }
      />

      <GameDataBox>
        <Name>
          {data.name}
        </Name>
        <Rating>
          {data.rating.toFixed(1)}/5
        </Rating>
      </GameDataBox>

      {typeCard === 'favorites' && (
        <RemoveGameToFav
          onPress={() => handleRemoveGameToFav(data.name)}
          activeOpacity={0.7}
        >
          <Feather name="trash" size={24} color="#FFF" />
        </RemoveGameToFav>
      )}
    </CardContainer>
  )
}
