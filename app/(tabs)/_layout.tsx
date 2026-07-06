import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Sticker Smash",
          // Hide the back button on the index screen
          headerLeft: () => <></>,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          headerTitle: "About",
          // back button is shown by default on the about screen, so no need to hide it
        }}
      />
      <Tabs.Screen
        name="+not-found"
        // No need to add options here, as the +not-found.tsx file already has a Stack.Screen with the desired options.
        options={{}}
      />
    </Tabs>
  );
}
