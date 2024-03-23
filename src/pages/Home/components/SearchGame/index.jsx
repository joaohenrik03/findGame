import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import { 
  SearchGameButton, 
  SearchGameContainer, 
  SearchGameInput 
} from './styles';

export function SearchGame() {
  const { navigate } = useNavigation();
  const [searchText, setTextToSearch] = useState('');

  function handleSearchGame() {
    if (searchText.trim() === '') {
      return;
    } 
    
    navigate('Search', { searchText: searchText });
    setTextToSearch('');
  }

  return (
    <SearchGameContainer>
      <SearchGameInput
        placeholder="Looking for a game?"
        placeholderTextColor="#F5F5F5"
        value={searchText}
        onChangeText={(text) => setTextToSearch(text)}
      />

      <SearchGameButton 
        onPress={handleSearchGame}
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
