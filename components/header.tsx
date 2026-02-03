import { Image. ImageSourcePropType, StyleSheet, View} from "react-native";

export const Header = ({ image: ImageSourcePropType }) => {
    return (
        <View style={s.quebrar}>
            <Image style={s.image} source={image} />
        </View>
    );
};

const s = StyleSheet.create({
  quebrar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
  },

  image: {
    width: "100%",
    height: 400,
  },
});
