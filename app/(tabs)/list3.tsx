import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function List() {
  const retornar = () => {
    router.push("/list");
  };

  return (
    <>
      <View>
        <Text> 1 Página De Componentes</Text>
      </View>

      <View></View>

      <TouchableOpacity onPress={retornar}>
        <Text>⬅Retornar</Text>
      </TouchableOpacity>
    </>
  );
}
