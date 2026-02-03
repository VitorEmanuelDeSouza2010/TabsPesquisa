import { Image } from "expo-image";
import { Text, View } from "react-native";

export const Item = ({
  name,
  description,
  image,
}: {
  name: string;
  description: string;
  image: string;
}) => {
  return (
    <View>
      <Image source={image} />
      <Text>{name}</Text>
      <Text>{description}</Text>
      <Text>{image}</Text>
    </View>
  );
};
