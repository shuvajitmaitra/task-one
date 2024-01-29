import { Link } from "expo-router";
import { View, Text } from "react-native";
export default function HomePage() {
  return (
    <View style={{justifyContent: "center", alignItems:"center"}}>
      <Text>HomePage</Text>
      <Link
        href="users/1"
        style={{ backgroundColor: "salmon", width: 130, textAlign:"center", borderRadius: 4 }}
      >
        Go User Page 1
      </Link>
    </View>
  );
}
 