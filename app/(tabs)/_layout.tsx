import { Tabs } from "expo-router";

export default function tabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ headerShown: false }} />
      <Tabs.Screen name="list" options={{ headerShown: false }} />
      <Tabs.Screen name="list2" options={{ headerShown: false }} />
      <Tabs.Screen name="list3" options={{ headerShown: false }} />
    </Tabs>
  );
}
