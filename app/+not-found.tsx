// This is the "not found" screen that is shown when a user visits a non-existent route. You can customize this screen to fit your app's design and branding.
import { Link, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      {/* no need to add Stack.Screen to _layout.tsx */}
      <Stack.Screen
        options={{
          headerTitle: "Oops! Not Found",
        }}
      />
      <View style={styles.container}>
        <Link href="/" style={styles.button}>
          Go to home screen
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
