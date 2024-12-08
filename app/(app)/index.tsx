
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import KeyMetrics from '~/UI/Dashboard/KeyMetrics';

import GoalsTracking from '~/UI/Dashboard/GoalsTracking';

export default function Home() {






  return (
    <View style={{flex:1}}>
    

      <ScrollView style={{padding:15,backgroundColor:"white"}}>
    
      
      {/* KEY METRICS */}
      <Text style={styles.header}>Key Metrics</Text>
      <KeyMetrics/>

      <Text style={styles.header}>Goals</Text>

      <GoalsTracking/>

      </ScrollView>
    </View>
  );
}



const styles = StyleSheet.create({
    header:{
      fontFamily:"Poppins-Regular",
      fontSize:30,
      color:"#00ACAC",
      marginBottom:5,
      padding:5
    },


})