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
      
      <Stack.Screen name="gateway" options={{}} />
      <Stack.Screen name="caloriesLogging"/>
    </Stack>
  );
}
