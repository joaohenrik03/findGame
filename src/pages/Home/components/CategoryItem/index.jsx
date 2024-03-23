import { CategoryItemContainer, CategoryItemText } from "./styles";

export function CategoryItem({data}) {
  return (
    <CategoryItemContainer 
      onPress={() => console.log('Levar para a página da categoria')}
      activeOpacity={0.8}
    >
      <CategoryItemText>
        {data.name}
      </CategoryItemText>
    </CategoryItemContainer>
  )
}
