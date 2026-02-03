import mock from "@/assets/constants/mock";
import { Item } from "@/components/item";
import { router } from "expo-router";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function List() {
  const voltar = () => {
    router.push("/(tabs)");
  };
  return (
    <>
      <View>
        <Text> 1 Página De Componentes</Text>
      </View>

      <View>
        <TouchableOpacity onPress={voltar}>
          <Text>⬅Retornar</Text>
        </TouchableOpacity>
      </View>

      <SafeAreaView>
        <FlatList
          data={mock}
          renderItem={({ item }) => (
            <Item
              name={item.nome}
              description={item.descricao}
              image={item.imagem}
            />
          )}
        ></FlatList>
      </SafeAreaView>
    </>
  );
}
