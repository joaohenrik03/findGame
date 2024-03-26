import { 
  HeadSectionContainer, 
  Name, 
  Rating 
} from "./styles";

export function HeadSection({name, rating}) {
  return (
    <HeadSectionContainer>
      <Rating>{rating}/5</Rating>
      <Name>{name}</Name>
    </HeadSectionContainer>
  )
}
