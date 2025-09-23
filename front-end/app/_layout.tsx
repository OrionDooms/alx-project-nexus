import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index"/>
      <Stack.Screen name="(home)/Post" />
      <Stack.Screen name="join" />
      <Stack.Screen name="signin" />
    </Stack>
  );
}
