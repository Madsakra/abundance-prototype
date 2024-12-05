import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Image, Text, View } from 'react-native';
import { useAuth } from '~/context/auth';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { router } from 'expo-router';
// import CustomDrawerContent from '~/components/CustomDrawerContent';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


function CustomDrawerContent(props:any) {

  const {signOut} = useAuth();
  
  const {top,bottom}= useSafeAreaInsets();
  
    return (
      <View style={{flex:1}}>
  
      <DrawerContentScrollView 
      {...props}>
          
      <View style={{padding:15,paddingBottom:50,flexDirection:"row",gap:15,alignItems:"center"}}>
          <Image 
          source={require("assets/profilePic.jpg")}
          style={{width:70,height:70,borderRadius:50}}/>

          <View style={{justifyContent:"center",flex:1}}>
          <Text style={{fontFamily:"Poppins-Bold",fontSize:28,color:"#00ACAC",flexShrink:1}}>Mary Ann </Text>
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
         <DrawerItem label={"Logout"} onPress={signOut}  icon={({ size, color }) => (
          <AntDesign name="logout" size={size} color={color}/>
        
        )} />
      </View>
 
      </View>)
}








const DrawerLayout = () => (
  
  <Drawer 
  drawerContent={CustomDrawerContent}
  screenOptions={{
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
        drawerIcon: ({ size, color }) => <FontAwesome name="home" size={size} color={color} />,
      }}
    />

    <Drawer.Screen
     name="(logging)"
     listeners={({ navigation }) => ({
      drawerItemPress: (e) => {
        // when user clicks on navigation, send them back to gateway
        router.replace("/(app)/(logging)/gateway")
      },
    })}
     
     options={{
      headerTitleAlign:'center',
      headerTitle: 'Logging',
      drawerLabel: 'Logging',
      headerRight:(()=><Image style={{borderRadius:60,width:40,height:40,marginRight:10}} source={require("assets/profilePic.jpg")} />),
      drawerIcon: ({ size, color }) => <FontAwesome name="book" size={24} color={color} />,
     }}
    />

    <Drawer.Screen
     name="(dataAnalytics)"
     listeners={({ navigation }) => ({
      drawerItemPress: (e) => {
        // when user clicks on navigation, send them back to gateway
        router.replace("/(app)/(dataAnalytics)/gateway")
      },
    })}
     
     options={{
      headerTitleAlign:'center',
      headerTitle: 'Data Analytics',
      drawerLabel: 'Data Analytics',
      headerRight:(()=><Image style={{borderRadius:60,width:40,height:40,marginRight:10}} source={require("assets/profilePic.jpg")} />),
      drawerIcon: ({ size, color }) => <FontAwesome name="bar-chart" size={24} color={color} />,
     }}
    />


    <Drawer.Screen
     name="(nutritionistFeedback)"
     listeners={({ navigation }) => ({
      drawerItemPress: (e) => {
        // when user clicks on navigation, send them back to gateway
        router.replace("/(app)/(nutritionistFeedback)/allFeedback")
      },
    })}
     
     options={{
      headerTitleAlign:'center',
      headerTitle: 'Nutritionist Feedback',
      drawerLabel: 'Nutritionist Feedback',
      headerRight:(()=><Image style={{borderRadius:60,width:40,height:40,marginRight:10}} source={require("assets/profilePic.jpg")} />),
      drawerIcon: ({ size, color }) => <MaterialCommunityIcons name="food-apple" size={size} color={color} />,
     }}
    />

  
  
    <Drawer.Screen
     name="(reminder)"
     listeners={({ navigation }) => ({
      drawerItemPress: (e) => {
        // when user clicks on navigation, send them back to gateway
        router.replace("/(app)/(reminder)/viewReminder")
      },
    })}
     
     options={{
      headerTitleAlign:'center',
      headerTitle: 'Reminder',
      drawerLabel: 'Reminder',
      headerRight:(()=><Image style={{borderRadius:60,width:40,height:40,marginRight:10}} source={require("assets/profilePic.jpg")} />),
      drawerIcon: ({ size, color }) => <MaterialCommunityIcons name="clock-alert-outline" size={size} color={color} />,
     }}
    />
  
  
  
  
  
  
  
  
  
  
  
  
  
  </Drawer>

);

export default DrawerLayout;
