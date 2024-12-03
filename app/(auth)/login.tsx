import { View,StyleSheet, Text, Pressable } from "react-native";
import { useAuth } from "~/context/auth";

export default function Home() {

  const { signIn } = useAuth()


  return (
    <View className="items-center justify-center w-full h-full">
      <Text className="text-4xl">Login</Text>


      <Pressable className="border-cyan-500 p-8 border-2 mt-4 rounded" onPress={signIn}>
      <Text>Sign In</Text>  
      </Pressable>

    </View>
  );
}




