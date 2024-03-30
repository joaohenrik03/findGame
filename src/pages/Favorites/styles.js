import styled from "styled-components/native";

export const FavoritesContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #050B18;
`;

export const FavoritesList = styled.FlatList`
  margin-top: 14px;
  flex: 1;
  padding: 0px 12px;
`;

export const EmptyList = styled(FavoritesContainer)`
 justify-content: center;
  align-items: center;
`;

export const EmptyText = styled.Text`
  color: #fff;
  font-size: 32px;
  padding-top: 12px;
`;
