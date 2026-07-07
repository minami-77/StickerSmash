import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      {/* Change the status bar style to light */}
      <StatusBar style="light" />

      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
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
    </>
  );
}
