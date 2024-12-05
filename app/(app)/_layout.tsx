import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Image, Text, View } from 'react-native';
import { useAuth } from '~/context/auth';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
// import CustomDrawerContent from '~/components/CustomDrawerContent';


function CustomDrawerContent(props:any) {

  const {signOut} = useAuth();
  
  const {top,bottom}= useSafeAreaInsets();
  
    return (
      <View style={{flex:1}}>
  
      <DrawerContentScrollView 
      {...props}>
          
      <View style={{padding:5,paddingBottom:20,flexDirection:"row",gap:10}}>
          <Image 
          source={require("assets/profilePic.jpg")}
          style={{width:70,height:70,borderRadius:50}}/>

          <View style={{justifyContent:"center",flexGrow:1}}>
          <Text style={{fontFamily:"Poppins-Bold",fontSize:24,color:"#00ACAC"}}>Mary Ann</Text>
          <Text style={{fontFamily:"Poppins-Regular",fontSize:15}}>maryAnn@gmail.com</Text>
          </View>
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
 
      </View>)
}









const DrawerLayout = () => (
  









  
  <Drawer 
  drawerContent={CustomDrawerContent}
  screenOptions={{drawerHideStatusBarOnOpen:true,
    drawerActiveBackgroundColor:"#AEE8E8",
    drawerActiveTintColor:"#00ACAC",
  }}
  >
    <Drawer.Screen
      name="index"

      options={{
        headerTitleAlign:'center',
        headerTitle: 'Home',
        drawerLabel: 'Home',
        headerRight:(()=><Image style={{borderRadius:60,width:40,height:40,marginRight:10}} source={require("assets/profilePic.jpg")} />),
        drawerIcon: ({ size, color }) => <Ionicons name="home-outline" size={size} color={color} />,
      }}
    />

    <Drawer.Screen
     name="(logging)/gateway"
      
     options={{
      headerTitleAlign:'center',
      headerTitle: 'Logging',
      drawerLabel: 'Logging',
      headerRight:(()=><Image style={{borderRadius:60,width:40,height:40,marginRight:10}} source={require("assets/profilePic.jpg")} />),
      drawerIcon: ({ size, color }) => <FontAwesome name="book" size={24} color={color} />,


     }}
      
    
    
    />


  </Drawer>
);

export default DrawerLayout;
