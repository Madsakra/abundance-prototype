import { Stack} from 'expo-router';


export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown:false
      }}
  
      >
      
      <Stack.Screen name="viewGoals"/>
      <Stack.Screen name="editGoals"/>

    </Stack>
  );
}
