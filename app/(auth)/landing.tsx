import { useFonts } from 'expo-font';
import { Link, SplashScreen } from 'expo-router';
import React, { useEffect } from 'react'
import { Image, Pressable, Text, View } from 'react-native'

export default function landing() {



  return (
    <View className='flex-1  items-center px-4 justify-center' >
        <Text style={{fontFamily:'Poppins-Bold',fontSize:40}}>A Great Journey Awaits</Text>
        <Text style={{fontFamily:'Poppins-Light',fontSize:18}}>Time to start Living Healthy and break down all the impurities in your body ! Tomorrow starts from today !! </Text>
        
        <View style={{height:'auto',width:'100%'}} className=' my-10'>
        <Image source={require('../../assets/landing.png')} className='w-full h-auto'/>
        </View>
        <Link href="/login" asChild>
        <Pressable style={{backgroundColor:'#00ACAC',width:'80%',borderRadius:5}}>
            <Text className='p-5 text-center' style={{fontFamily:'Poppins-Bold',fontSize:20,color:'white'}}>Sign In</Text>
        </Pressable>
        </Link>
    </View>
  )
}
