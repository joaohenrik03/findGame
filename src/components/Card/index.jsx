import { 
  CardContainer, 
  GameDataBox, 
  Image, 
  Name, 
  Rating, 
} from "./styles";

export function Card() {
  return (
    <CardContainer>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1626971891549-a26b62c68eb1?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
      />

      <GameDataBox>
        <Name>
          CyberPunk 2077
        </Name>
        <Rating>
          6.9/10
        </Rating>
      </GameDataBox>
    </CardContainer>
  )
}
