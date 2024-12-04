import { Link} from 'expo-router';
import React, { useEffect } from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

export default function landing() {



  return (
    <View style={styles.container} >

        <View >
        <Text style={{fontFamily:'Poppins-Bold',fontSize:40}}>A Great Journey Awaits</Text>
        <Text style={{fontFamily:'Poppins-Regular',fontSize:15}}>Time to start Living Healthy and break down all the impurities in your body ! Tomorrow starts from today !! </Text>
        </View>
        
        <View style={{gap:20}}>
        <View style={{height:'auto',width:'100%',marginVertical:40}}>
        <Image source={require("../../assets/landing.png")} />
        </View>


        
        <Link href="/login" asChild>
        <Pressable style={{backgroundColor:'#00ACAC',width:'90%',borderRadius:5,alignSelf:'center'}}>
            <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>
        </Link>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    padding:20,
    marginTop:"10%"
  },

  buttonText:{
    padding:10,
    textAlign:"center",
    fontFamily:'Poppins-Bold',fontSize:20,color:'white'
  }
})