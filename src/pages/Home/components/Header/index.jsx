import { Text } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import { 
  HeaderContainer, 
  LinkSave, 
  Title 
} from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <Title>
        Find<Text style={{color: '#FF455F'}} >Game</Text>
      </Title>  

      <LinkSave 
        onPress={() => console.log('Levar para a página de favoritos!')}
        activeOpacity={0.7}
      >
        <Feather name="bookmark" size={20} color="#FFF" />   
      </LinkSave>
    </HeaderContainer>
  )
}
