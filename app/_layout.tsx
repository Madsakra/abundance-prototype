
import { AuthProvider } from '~/context/auth';
import { Slot, SplashScreen, Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { Text, View } from 'react-native';




export default function RootLayout() {

  const [loaded,error] = useFonts({
    'Poppins-ExtraLight':require('../assets/fonts/Poppins-ExtraLight.ttf'),
    'Poppins-Light':require('../assets/fonts/Poppins-Light.ttf'),
    'Poppins-Regular':require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium':require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold':require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold':require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-ExtraBold':require('../assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-Black':require('../assets/fonts/Poppins-Black.ttf'),
  })







  
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }








  return (


    <AuthProvider>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slot/>
    </GestureHandlerRootView>
    </AuthProvider>


  );
}
