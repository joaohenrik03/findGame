import { useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { 
  SearchGameButton, 
  SearchGameContainer, 
  SearchGameInput 
} from './styles';

export function SearchGame() {
  const [searchText, setSearchText] = useState('');

  return (
    <SearchGameContainer>
      <SearchGameInput
        placeholder="Looking for a game?"
        value={searchText}
        onChange={(text) => setSearchText(text)}
        placeholderTextColor="#F5F5F5"
      />

      <SearchGameButton 
        onPress={() => console.log('Buscar jogo!')}
        activeOpacity={0.8}
      >
        <Feather 
          name="search" 
          size={32} 
          color="#FF455F" 
        />
      </SearchGameButton>
    </SearchGameContainer>
  )
}
