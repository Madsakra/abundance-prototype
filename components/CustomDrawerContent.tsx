import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { router } from "expo-router";
import Drawer from "expo-router/drawer";
import { useState } from "react";

import { Image, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAuth } from "~/context/auth";

export default function CustomDrawerContent(props:any) {

  const {signOut} = useAuth();
  
  const {top,bottom}= useSafeAreaInsets();


  const [expandedTabs, setExpandedTabs] = useState<{ [key: string]: boolean }>({
    logging: false,
    analytics: false,
  });

  const toggleTab = (tab: string) => {
    setExpandedTabs((prev) => ({ ...prev, [tab]: !prev[tab] }));
  };



  
    return (
      <View style={{flex:1}}>
  
      <DrawerContentScrollView 
      {...props}>
          
      <View style={{padding:15,paddingBottom:20,flexDirection:"row",gap:15,alignItems:"center"}}>
          <Image 
          source={require("assets/profilePic.jpg")}
          style={{width:70,height:70,borderRadius:50}}/>

          <View style={{justifyContent:"center",flex:1}}>
          <Text style={{fontFamily:"Poppins-Bold",fontSize:28,color:"#00ACAC",flexShrink:1}}>Mary Ann </Text>
          <Text style={{fontFamily:"Poppins-Regular",fontSize:15}}>maryAnn@gmail.com</Text>
          </View>
      </View>

      <View 
      style={{
          borderTopColor:"#dde3fe",
          borderTopWidth:1,
          padding:5,
          paddingStart:10,
          paddingBottom:10+bottom
          
      }}
      >
         <DrawerItem label={"Home"} onPress={signOut}  icon={({ size, color }) => (
          <AntDesign name="logout" size={size} color={color}/>
        
        )} />
      </View>
    
      {/* <DrawerItemList {...props}/> */}
        
      </DrawerContentScrollView>




      <View 
      style={{
          borderTopColor:"#dde3fe",
          borderTopWidth:1,
          padding:5,
          paddingStart:10,
          paddingBottom:10+bottom
          
      }}
      >
         <DrawerItem label={"Logout"} onPress={signOut}  icon={({ size, color }) => (
          <AntDesign name="logout" size={size} color={color}/>
        
        )} />
      </View>
 
      </View>)
}




