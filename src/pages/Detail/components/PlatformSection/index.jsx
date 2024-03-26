import { Platforms } from "../../../../components/Platforms";
import { Title } from "../Title";
import { PlatformSectionContainer, PlatformsList } from "./styles";

export function PlatformSection({platforms}) {
  return (
    <PlatformSectionContainer>
      <Title>
        Platforms
      </Title>

      <PlatformsList
        horizontal={true}
        data={platforms}
        keyExtractor={(item) => item.platform.id}
        renderItem={({ item }) => <Platforms platform={item.platform.name} />}
      />
    </PlatformSectionContainer>
  )
}
