import { useNavigation } from "@react-navigation/native";
import { 
  CardContainer, 
  GameDataBox, 
  Image, 
  Name, 
  Rating, 
} from "./styles";

export function Card({data}) {
  const { navigate } = useNavigation();

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
    </CardContainer>
  )
}
