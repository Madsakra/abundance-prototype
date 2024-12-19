import { View,StyleSheet, Text, Pressable, Image } from "react-native";
import { useAuth } from "~/context/auth";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FunctionTiedButton from "~/components/FunctionTiedButton";


export default function Home() {

  const { signIn } = useAuth()

  const [email,setEmail] = useState<string>("");


  const [password, setPassword] = useState<string>("");

  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle the password visibility state
  const toggleShowPassword = () => {
      setShowPassword(!showPassword);
  };

  // for prototype test
  const fakeUserObject = {
    id:'12345as',
    name:'axmen',
    email:'yhj@gmail.com',
    token:'hash1241241',
    profileID:''
  }


  function loginCall()
  {
    try{

    // use email and password to make api call 
      if (email.trim() === "" || password.trim() === "")
      {
         alert("You have missed out on either your email and password!")
      }

      else{
         signIn(fakeUserObject);

      }

     // make API call to the server
    // when server responds, set the context to the user object
    
    

    }
    catch(err)
    {
      console.log(err);
    }

  }




  return (
    <View style={styles.pageContainer}>

      
         {/* Form container*/}
      <View style={styles.formContainer}>

      {/* LOGO CONTAINER */}
      <View style={styles.logoContainer}> 
      <Image source={require('../../assets/icon.png')} style={{width:120,height:120}}/>
      </View>
     
      <Text  style={{fontFamily:'Poppins-SemiBold', fontSize:30, color:'#009797'}}>Hello Again!</Text>
      <Text  style={{fontFamily:'Poppins-Regular', fontSize:14, marginBottom:20}}>Log in to your account</Text>




      <View style={styles.inputSection}>
             <TextInput
                placeholder="Enter your email"
                value={email}
                onChangeText={text => setEmail(text)}
                style={[styles.inputBox,{paddingHorizontal:25}]}
             />
 
             <View style={styles.passwordContainer}>
                <TextInput
                   placeholder="Enter your Password"
                   value={password}
                   onChangeText={text => setPassword(text)}
                   style={[styles.inputBox, {flex: 1,borderWidth:0}]}
                   secureTextEntry={!showPassword}
                />
                <MaterialCommunityIcons
                   name={showPassword ? 'eye-off' : 'eye'}
                   size={24}
                   color="#aaa"
                   style={{marginLeft:10}}
                   onPress={toggleShowPassword}
                />
             </View>
          </View>

          <Pressable style={styles.forgetPassword}>
            <Text style={{color:'#A3A2A2'}}>Forget Password?</Text>
        </Pressable>

  

      <FunctionTiedButton
         buttonStyle={styles.buttonBox}
         onPress={loginCall}
         textStyle={styles.buttonText}
         title="Login"
      />


      </View>
    </View>
  );
}


const styles = StyleSheet.create({

   pageContainer:{
      width:"100%",
      height:"100%",
      gap:20
   },

   formContainer:{
      width:"100%",
      alignItems:"center",
      flex:1,
   
      justifyContent:"center"
   },


   logoContainer:{
      width:20,
      height:20,
      alignItems:"center",
      justifyContent:"center",
      marginBottom:"12%"
   },

  inputSection:{
   gap:10, 
   width:'100%', 
   alignItems:'center',
   marginTop:10
  },

 

  nameBox: {
     width: "100%",
     alignItems: 'center',
     justifyContent: 'center',
     paddingVertical: 20,
  },

  inputBox: {
     width: "80%",      
     height: "auto",
     padding: 15,
     borderColor: '#A3A2A2',
     borderWidth: 1,
     borderRadius: 5,
  },

  passwordContainer: {
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'center',
     width: "80%",       
     borderRadius: 5,
     paddingHorizontal: 10,
     borderWidth: 1,
     borderColor: '#A3A2A2',
  },

  forgetPassword:{
      marginTop:10, 
      width:'80%',
      alignItems:"flex-end",   
  },


  buttonBox:{
   backgroundColor:"#00ACAC",
   width:'80%',
   borderRadius:5,
   marginTop:40
  },

  buttonText:{
   fontFamily:"Poppins-Bold",
   fontSize:20,color:"white",
   padding:10,
   textAlign:"center"
  }


  
});

