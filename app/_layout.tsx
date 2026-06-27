import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Sticker Smash",
          // Hide the back button on the index screen
          headerLeft: () => <></>,
        }}
      />
      <Stack.Screen
        name="about"
        options={{
          headerTitle: "About",
        }}
      />
      <Stack.Screen
        name="+not-found"
        // No need to add options here, as the +not-found.tsx file already has a Stack.Screen with the desired options.
        options={{}}
      />
    </Stack>
  );
}
