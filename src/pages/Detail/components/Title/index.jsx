import { Text } from "react-native";

export function Title({children}) {
  return (
    <Text style={{
      fontSize: 18,
      fontWeight: 600,
      color: '#FFF',
      paddingTop: 24,
    }}>
      {children}
    </Text>
  )
}
