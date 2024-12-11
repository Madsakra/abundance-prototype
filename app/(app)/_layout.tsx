import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useAuth } from '~/context/auth';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Link, router } from 'expo-router';
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
          
      <View style={{padding:15,paddingBottom:20,flexDirection:"row",gap:15,alignItems:"center"}}>
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
          padding:5,
          paddingStart:10,
          paddingBottom:10+bottom
          
      }}
      >
         <DrawerItem label={"Logout"}
         activeBackgroundColor='#00ACAC'
         onPress={signOut}  icon={({ size, color }) => (
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
    headerStyle:{  
    backgroundColor:'white',
    borderColor:"#D9D9D9",
    elevation: 0, // Android shadow
    shadowColor: "transparent", // iOS shadow
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,

    },
    headerTintColor: "#00ACAC",
    headerTitleStyle: {
      fontFamily:"Poppins-Light",
      fontSize:18,
      
    },
    
  }}
  >

   
    <Drawer.Screen
      name="index"

      options={{
        headerTitleAlign:'center',
        headerTitle: 'Home',
        drawerLabel: 'Home',
        
        drawerIcon: ({ size, color }) => <FontAwesome name="home" size={size} color={color} />,
      }}
    />

    <Drawer.Screen
     name="(caloriesAndGlucose)"
     listeners={({ navigation }) => ({
      drawerItemPress: (e) => {
        // when user clicks on navigation, send them back to gateway
        e.preventDefault();
        router.push("/(app)/(caloriesAndGlucose)/gateway")
      },
    })}
     
     options={{
      headerTitleAlign:'center',
      headerTitle: 'Calories and Glucose',
    
      drawerLabel: 'Calories and Glucose',
      drawerIcon: ({ size, color }) => <FontAwesome name="book" size={24} color={color} />,
      
    }}
    />

  
    <Drawer.Screen
     name="(goals)"
     listeners={({ navigation }) => ({
      drawerItemPress: (e) => {
        e.preventDefault();
        // when user clicks on navigation, send them back to gateway
        router.replace("/(app)/(goals)/viewGoals")
      },
    })}
     
     options={{
      headerTitleAlign:'center',
      headerTitle: 'Goals',
      drawerLabel: 'Goals',
      drawerIcon: ({ size, color }) => <MaterialCommunityIcons name="flag" size={size} color={color} />,
     }}
    />
  
  <Drawer.Screen
     name="(settings)"
     listeners={({ navigation }) => ({
      drawerItemPress: (e) => {
        e.preventDefault();
        // when user clicks on navigation, send them back to 
        router.replace("/(app)/(settings)/gateway");
      },
    })}
     
     options={{
      headerTitleAlign:'center',
      headerTitle: 'Settings',
      drawerLabel: 'Settings',
      drawerIcon: ({ size, color }) => <FontAwesome5 name="user-cog" size={size} color={color} />,
     }}
    />

    <Drawer.Screen
     name="(dataCorrelation)"
     listeners={({ navigation }) => ({
      drawerItemPress: (e) => {
        e.preventDefault();
        router.replace("/(app)/(dataCorrelation)/viewDataCorrelation");
        // when user clicks on navigation, send them back to gateway
      },
    })}
     
     options={{
      headerTitleAlign:'center',
      headerTitle: 'Data Correlation',
      drawerLabel: 'Data Correlation',
      drawerIcon: ({ size, color }) => <AntDesign name="dotchart" size={size} color={color} />,
     }}
    />


  <Drawer.Screen
     name="(reminder)"
     listeners={({ navigation }) => ({
      drawerItemPress: (e) => {
        e.preventDefault();
        // when user clicks on navigation, send them back to gateway
        router.replace("/(app)/(reminder)/viewReminder")
      },
    })}
     
     options={{
      headerTitleAlign:'center',
      headerTitle: 'Reminder',
      drawerLabel: 'Reminder',
      drawerIcon: ({ size, color }) => <MaterialCommunityIcons name="clock-alert-outline" size={size} color={color} />,
     }}
    />
  

  
  <Drawer.Screen
     name="(appReview)"
     listeners={({ navigation }) => ({
      drawerItemPress: (e) => {
        e.preventDefault();
        // when user clicks on navigation, send them back to gateway
        router.replace("/(app)/(appReview)/viewAppReviews")
      },
    })}
     
     options={{
      headerTitleAlign:'center',
      headerTitle: 'App Review',
      drawerLabel: 'App Review',
      drawerIcon: ({ size, color }) => <MaterialCommunityIcons name="comment-text-multiple" size={size} color={color} />,
     }}
    />
  
  <Drawer.Screen
     name="(nutritionistFeedback)"
     listeners={({ navigation }) => ({
      drawerItemPress: (e) => {
        e.preventDefault();
        // when user clicks on navigation, send them back to gateway
        router.replace("/(app)/(nutritionistFeedback)/allFeedback")
      },
    })}
     
     options={{
      headerTitleAlign:'center',
      headerTitle: 'Nutritionist Feedback',
      drawerLabel: 'Nutritionist Feedback',
      drawerIcon: ({ size, color }) => <MaterialCommunityIcons name="food-apple" size={size} color={color} />,
     }}
    />


  <Drawer.Screen
    name="(articles)/[id]"
    options={{
      drawerItemStyle: { display: 'none' },
      headerTitle:"Article",
      headerTitleAlign:"center"
    }}
  />


  
  </Drawer>

);




export default DrawerLayout;

