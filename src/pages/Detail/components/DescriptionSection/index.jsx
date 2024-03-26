import { Title } from "../Title";
import { 
  DescriptionContent, 
  DescriptionSectionContainer, 
  ReadFullButton, 
  ReadFullText 
} from "./styles";

export function DescriptionSection({gameDescription, handleOpenModal}) {
  return (
    <DescriptionSectionContainer>
      <Title>
        Description
      </Title>

      <DescriptionContent numberOfLines={2}>
        {gameDescription}
      </DescriptionContent>

      <ReadFullButton 
        activeOpacity={0.8} 
        onPress={handleOpenModal}
      >
        <ReadFullText>
          Read full description
        </ReadFullText>
      </ReadFullButton>
    </DescriptionSectionContainer>
  )
}
