import { Link, router } from "expo-router";
import { View, Text, Pressable } from "react-native";
export default function HomePage() {
  return (
    <View>
      <Text>HomePage</Text>
      <Link href={"users/1"}>User Page 1</Link>
      {/* <Pressable onPress={() => router.push("users/2")}>
        <Text>User 2</Text>
      </Pressable> */}
      <Pressable 
      onPress={()=> router.push({
        pathname: 'users/[id]',
        params: {id: 2}
      })}>
        <Text>User Page 2</Text>
      </Pressable>
    </View>
  );
}
