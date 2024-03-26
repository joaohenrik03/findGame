import Feather from 'react-native-vector-icons/Feather';
import { BackButtonContainer } from './styles';

export function BackButton({performFunction}) {
  return (
    <BackButtonContainer onPress={performFunction}>
      <Feather 
        name="arrow-left" 
        size={32} 
        color="#FFF" 
      />
    </BackButtonContainer>
  )
}
