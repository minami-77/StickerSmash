import { Image } from "expo-image";
import { useState } from "react";
import { FlatList, Platform, Pressable, StyleSheet } from "react-native";

type Props = {
  onSelect: (emoji: string) => void;
  onCloseModal: () => void;
};

export default function EmojiList({ onSelect, onCloseModal }: Props) {
  const [emoji] = useState([
    require("../assets/images/emoji/emoji_1.png"),
    require("../assets/images/emoji/emoji_2.png"),
    require("../assets/images/emoji/emoji_3.png"),
    require("../assets/images/emoji/emoji_4.png"),
    require("../assets/images/emoji/emoji_5.png"),
    require("../assets/images/emoji/emoji_6.png"),
  ]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === "web"}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}
        >
          <Image source={item} key={index} style={styles.image} />
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});
