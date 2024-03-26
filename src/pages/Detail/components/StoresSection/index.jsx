import { Platforms } from "../../../../components/Platforms";
import { Title } from "../Title";
import { StoresList, StoresSectionContainer } from "./styles";

export function StoresSection({stores}) {
  return (
    <StoresSectionContainer>
      <Title>
        Stores
      </Title>

      <StoresList 
        horizontal={true}
        data={stores}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Platforms platform={item.store.name} />}
      />
    </StoresSectionContainer>
  )
}
