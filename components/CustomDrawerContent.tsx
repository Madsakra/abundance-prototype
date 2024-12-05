import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";

import { Image, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAuth } from "~/context/auth";





export default function CustomDrawerContent(props:any) {

const {signOut} = useAuth();

const {top,bottom}= useSafeAreaInsets();

  return (
    <View style={{flex:1}}>

    <DrawerContentScrollView 
    {...props}>
        
    <View style={{padding:20}}>
        <Image 
        source={require("assets/profilePic.jpg")}
        style={{width:60,height:60,borderRadius:50}}
        
        
        />
    </View>
    
    
    <DrawerItemList {...props}/>
        
    </DrawerContentScrollView>




    <View 
    style={{
        borderTopColor:"#dde3fe",
        borderTopWidth:1,
        padding:20,
        paddingBottom:20+bottom
        
    }}
    >
       <DrawerItem label={"Logout"} onPress={signOut}/>
    </View>




    </View>

  )
}
