import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useAuth } from '~/context/auth';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Link, router } from 'expo-router';
import CustomDrawerContent from '~/components/CustomDrawerContent';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';










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
     name="(logging)"
     listeners={({ navigation }) => ({
      drawerItemPress: (e) => {
        // when user clicks on navigation, send them back to gateway
        e.preventDefault();
        router.push("/(app)/(logging)/gateway")
      },
    })}
     
     options={{
      headerTitleAlign:'center',
      headerTitle: 'Logging',
      drawerLabel: 'Logging',
      drawerIcon: ({ size, color }) => <FontAwesome name="book" size={24} color={color} />,
     }}
    />

    <Drawer.Screen
     name="(dataAnalytics)"
     listeners={({ navigation }) => ({
      drawerItemPress: (e) => {
        e.preventDefault();
        // when user clicks on navigation, send them back to gateway
        router.replace("/(app)/(dataAnalytics)/gateway")
      },
    })}
     
     options={{
      headerTitleAlign:'center',
      headerTitle: 'Data Analytics',
      drawerLabel: 'Data Analytics',
      drawerIcon: ({ size, color }) => <FontAwesome name="bar-chart" size={24} color={color} />,
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
     name="(membership)"
     listeners={({ navigation }) => ({
      drawerItemPress: (e) => {
        e.preventDefault();
        // when user clicks on navigation, send them back to gateway
        router.replace("/(app)/(membership)/viewMembership")
      },
    })}
     
     options={{
      headerTitleAlign:'center',
      headerTitle: 'Membership',
      drawerLabel: 'Membership',
      drawerIcon: ({ size, color }) => <AntDesign name="creditcard" size={size} color={color} />,
     }}
    />
  
  
  <Drawer.Screen
     name="(profile)"
     listeners={({ navigation }) => ({
      drawerItemPress: (e) => {
        e.preventDefault();
        // when user clicks on navigation, send them back to gateway
        router.replace("/(app)/(profile)/viewProfile")
      },
    })}
     
     options={{
      headerTitleAlign:'center',
      headerTitle: 'Profile',
      drawerLabel: 'Profile',
      drawerIcon: ({ size, color }) => <AntDesign name="user" size={size} color={color} />,
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
    name="(articles)/[id]"
    options={{
      drawerItemStyle: { display: 'none' },
      headerTitle:"Article",
      headerTitleAlign:"center"
    }}
  />


  
  </Drawer>

);

// const styles = StyleSheet.create({
//   headerAvatar:{
//     borderRadius:60,
//     width:40,
//     height:40,
//     marginRight:10
//   }
// })


export default DrawerLayout;

