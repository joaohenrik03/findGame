import { ActivityIndicator } from "react-native";
import { LoadingContainer } from "./styles";

export function Loading({size}) {
  return (
    <LoadingContainer>
      <ActivityIndicator size={size} color={"#E72F49"} />
    </LoadingContainer>
  )
}
