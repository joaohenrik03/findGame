import styled from "styled-components/native";

export const CardContainer = styled.TouchableOpacity`
  height: 168px;
  margin-bottom: 16px;
  position: relative;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.7;
  border-radius: 8px;
`;

export const GameDataBox = styled.View`
  position: absolute;
  left: 12px;
  bottom: 8px;
`;

export const Name = styled.Text`
  font-size: 14px;
  color: #FFF;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Rating = styled.Text`
  font-size: 14px;
  color: #FFF;
`;

export const RemoveGameToFav = styled.TouchableOpacity`
  height: 46px;
  width: 46px;
  justify-content: center;
  align-items: center;
  background-color: #E72F49;
  border-radius: 99px;
  position: absolute;
  z-index: 9;
  top: 8px;
  right: 12px;
`;
