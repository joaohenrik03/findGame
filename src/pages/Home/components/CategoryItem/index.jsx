import { useNavigation } from "@react-navigation/native";
import { CategoryItemContainer, CategoryItemText } from "./styles";

export function CategoryItem({data}) {
  const { navigate } = useNavigation();

  return (
    <CategoryItemContainer 
      onPress={() => navigate('Search', { category: data.name })}
      activeOpacity={0.8}
    >
      <CategoryItemText>
        {data.name}
      </CategoryItemText>
    </CategoryItemContainer>
  )
}
