import { Stack } from 'expo-router';
import { Pressable, Text } from 'react-native';

import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';
import { useAuth } from '~/context/auth';

export default function Home() {
  const {signOut} = useAuth();
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <Container>
        <ScreenContent path="app/(app)/index.tsx" title="Home" />





      <Pressable className="border-cyan-500 p-8 border-2 mt-4 rounded" onPress={signOut}>
      <Text>Sign Out</Text>  
      </Pressable>



      </Container>
    </>
  );
}
