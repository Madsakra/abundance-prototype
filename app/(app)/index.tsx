import { Stack } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import KeyMetrics from '~/components/KeyMetrics';

import { useAuth } from '~/context/auth';

export default function Home() {
  const {signOut} = useAuth();
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />

      <ScrollView style={{flex:1,padding:15,backgroundColor:"white"}}>

      
      {/* KEY METRICS */}
      <Text style={styles.header}>Key Metrics</Text>
      <KeyMetrics/>

      </ScrollView>
    </>
  );
}



const styles = StyleSheet.create({
    header:{
      fontFamily:"Poppins-Bold",
      fontSize:30,

      marginBottom:5,
    }
})