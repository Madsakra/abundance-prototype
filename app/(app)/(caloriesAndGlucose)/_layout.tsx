import { Stack, Tabs } from 'expo-router';

import { TabBarIcon } from '~/components/TabBarIcon';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown:false
      }}
      initialRouteName="gateway"
      >
      
      <Stack.Screen name="gateway"/>
      <Stack.Screen name="calories/caloriesLogging"/>
      <Stack.Screen name="calories/caloriesGraph"/>

      <Stack.Screen name="glucose/glucoseLogging"/>
      
    </Stack>
  );
}
