import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="profile" options={{ title: "Meu Perfil" }} />
      <Tabs.Screen name="feed/index" options={{ title: "Feed" }} />
      <Tabs.Screen name="feed/[postId]" options={{ title: "Post" }} />
    </Tabs>
  );
}
