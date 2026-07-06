import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerTitle: "Sticker Smash",
          // Hide the header for the tabs layout
          headerShown: false,
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
