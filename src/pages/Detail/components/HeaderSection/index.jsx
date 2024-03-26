import { Banner, HeaderSectionContainer } from "./styles";

export function HeaderSection({bgUrl}) {
  return (
    <HeaderSectionContainer>
      <Banner 
        source={
          bgUrl ? {uri: bgUrl} : require('../../../../assets/default-bg.jpg')
        }
      />
    </HeaderSectionContainer>
  )
}
