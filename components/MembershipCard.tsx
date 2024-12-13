import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { SvgProps } from 'react-native-svg';
import membership from '~/app/(app)/(settings)/membership';

type MembershipCardProps = {
    tier:string;
    price:string;
    externalSvg?:React.ReactNode;
    
}



export default function MembershipCard({tier,price,externalSvg}:MembershipCardProps) {
  return (
      <View style={styles.container}>

        <View style={styles.innerLayout}>
        <Text style={{fontFamily:"Poppins-Bold",fontSize:18}}>Membership Tier</Text>
        <Text style={{fontFamily:"Poppins-Bold",fontSize:24}}>{tier}</Text>
        <Text style={{fontFamily:"Poppins-Regular",fontSize:17}}>{price}</Text>
        <Pressable style={styles.buttonContainer} onPress={()=>alert("Redirect to external API (Stripe)")}>
          <Text style={styles.buttonContainerText}>Change Plan</Text>
        </Pressable>
        </View>

        {tier === "Full Premium" && 
        <Image source={require("assets/premium.png")} style={{width:80,height:80}}/>
        
        }

        <View style={{width:"30%",paddingLeft:25}}>
        {externalSvg}            
        </View>        


    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        borderWidth:2,
        borderColor:"#CFCFCF",
        height:200,
        padding:10,
        borderRadius:5,
        flexDirection:"row",
        alignItems:"center",
        marginBottom:20,
    },

    innerLayout:{
        justifyContent:"space-evenly",
        height:"100%",
        width:"70%"
    },

    buttonContainer:{
        backgroundColor:"#00ACAC",
        padding:12, 
        width:"75%",
        borderRadius:5
    },


    buttonContainerText:{
        textAlign:"center",
        color:"white",
        fontFamily:"Poppins-Bold"
    }




})