import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomePage() {
  return (
    <SafeAreaView>
      <Text style={s.title}>Tela inicial</Text>
      <Text style={s.paragraph}>App usando React-Native e Expo.</Text>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  title: {
    fontSize: 40,
  },
  paragraph: {},
});
