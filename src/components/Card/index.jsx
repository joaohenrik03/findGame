import { 
  CardContainer, 
  GameDataBox, 
  Image, 
  Name, 
  Rating, 
} from "./styles";

export function Card({data}) {
  return (
    <CardContainer>
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
