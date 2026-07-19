import { Modal, Pressable, Text, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

type Props = {
  isVisible: boolean;
  children: React.ReactNode;
  onClose: () => void;
};

export default function EmojiPicker({ isVisible, children, onClose }: Props) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Choose a sticker</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" size={22} color="#fff" />
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  );
}
