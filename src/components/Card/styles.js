import styled from "styled-components/native";

export const CardContainer = styled.TouchableOpacity`
  height: 168px;
  border-radius: 8px;
  margin-bottom: 16px;
  position: relative;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.7;
`;

export const GameDataBox = styled.View`
  position: absolute;
  left: 12px;
  bottom: 8px;
`;

export const Name = styled.Text`
  font-size: 18px;
  color: #FFF;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Rating = styled.Text`
  font-size: 14px;
  color: #FFF;
`;
