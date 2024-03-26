import { Platform, PlatformsContainer } from "./styles";

export function Platforms({platform}) {
  return (
    <PlatformsContainer>
      <Platform>
        {platform}
      </Platform>  
    </PlatformsContainer>
  )
}
