import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function List() {
  const voltar = () => {
    router.push("/(tabs)/list");
  };

  return (
    <>
      <View>
        <Text> 1 Página De Componentes</Text>
      </View>

      <View></View>

      <View>
        <TouchableOpacity onPress={voltar}>
          <Text>⬅Retornar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
