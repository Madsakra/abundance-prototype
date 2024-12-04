import { useState } from "react";
import {  Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Picker } from "@react-native-picker/picker";
import ImageSelector from "~/components/ImageSelector";
import DatePicker from "~/components/DatePicker";


export default function simpleInformation() {

  const [image, setImage] = useState<string | null>(null);
  const [name,setName] = useState<string>("");
  const [gender,setGender] = useState<string>("")
  const [dOB,setDOB] = useState<Date>(new Date())

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };


 

    
  return (
    <View style={styles.pageContainer}>
        <Text style={styles.header}>Profile Creation</Text>
        <Text style={{fontFamily:"Poppins-Regular",fontSize:20,textAlign:"center"}}>A few more steps to go...</Text>
        

        {/* Image selector*/}
        <View style={image?styles.imageContainer:[styles.imageContainer,{backgroundColor:'gray'}]}>
        {image && <Image source={{ uri: image }} style={{flex:1, borderRadius:50}} />}

        <ImageSelector pickImage={pickImage}/>
        </View>
        {/*----------------*/}



        {/* FORM CONTAINER*/}
        <View  style={styles.formsContainer}>

            {/* Name Input */}
          <View>
          <Text style={styles.label} >Name</Text>
          <TextInput
                placeholder="Enter your name"
                value={name}
                onChangeText={text => setName(text)}
                style={[styles.inputContainer,{padding:15}]}
             />
          </View>

          {/* Gender Input */}
          <View>
          <Text style={styles.label}>Gender</Text>
          <View style={styles.inputContainer}>
            <Picker
              selectedValue={gender}
              onValueChange={(itemValue) => setGender(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Select Your Gender" value="" />
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
              <Picker.Item label="Other" value="other" />
            </Picker>
          </View>
        </View>

        {/*Birthday input*/}
        <DatePicker/>



        </View>
       {/* --------------FORM CONTAINER---------------*/}

    </View>
  )
}


const styles = StyleSheet.create({

  pageContainer:{
    borderWidth:1,
    flex:1,
    padding:20
  },

  header:{
    fontFamily:"Poppins-Bold",
    fontSize:40,
    textAlign:"center",
    marginTop:15
  },


  imageContainer:{
    width:100,
    height:100,
    borderRadius:50,
    alignSelf:"center",
    position:"relative",
    marginTop:"5%"
  },



  formsContainer:{
    flex:1,
    marginTop:"2%",
    padding:10,
    gap:20
  },



  // PICKER - TO BE TRANSFERRED TO COMPONENT

  label: {
    fontSize: 16,
    marginBottom: 8,
    color:"#505050",
    fontFamily:"Poppins-Regular"
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#8797DA",
    borderRadius: 5,
    overflow: "hidden",
  
  },
  picker: {
   color:"#505050",
   fontFamily:"Poppins-Regular"

  },







})