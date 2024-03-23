import styled from "styled-components/native";

export const HeaderContainer = styled.SafeAreaView`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 12px;
  background-color: transparent;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #FFF;
  font-weight: bold;
`;

export const LinkSave = styled.TouchableOpacity`
  background-color: #1F2430;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
`;
