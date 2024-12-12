import { FontAwesome, FontAwesome6, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Platform, StyleSheet, Text, TextInput, View } from 'react-native'
import { Pressable, ScrollView } from 'react-native-gesture-handler'
import DateTimePicker from "@react-native-community/datetimepicker";
import PeriodSelector from '~/components/PeriodSelector';
import { router } from 'expo-router';
import CustomModal from '~/components/CustomModal';

export default function glucoseLogging() {

  const [glucoseInput, setGlucoseInput] = useState<string>("");
  const [time, setTime] = useState(new Date()); // State to store selected time
  const [showDatePicker, setShowDatePicker] = useState(false); // State to control date picker visibility
  const [showTimePicker, setShowTimePicker] = useState(false); // State to control time picker visibility
  const [loggedPeriod,setLoggedPeriod] = useState("");

  const [date, setDate] = useState(new Date());
  
  const handleInputChange = (text: string) => {
       // Allow only numbers and a single decimal point
       const numericValue = text.replace(/[^0-9.]/g, "");

       // Ensure no more than one decimal point
       if (numericValue.split(".").length > 2) return;
   
       setGlucoseInput(numericValue);
  };

  // DATE SELECTOR

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { day: "numeric", month: "short", year: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };


    // Format the time (e.g., "9:30 AM")
    const formatTime = (date: Date) => {
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? "pm" : "am";
      const formattedHours = hours % 12 || 12; // Convert 24-hour to 12-hour format
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      return `${formattedHours}.${formattedMinutes} ${ampm}`;
    };
  
    const handleDateChange = (event: any, selectedDate?: Date) => {
      setShowDatePicker(false); // Close the date picker
      if (selectedDate) {
        setDate(selectedDate); // Update the date
      }
    };
  
    const handleTimeChange = (event: any, selectedTime?: Date) => {
      setShowTimePicker(false); // Close the time picker
      if (selectedTime) {
        setTime(selectedTime); // Update the time
      }
    };

    const handleLoggedPeriod = (period:string) =>{
      setLoggedPeriod(period)
    }



    const [showModal,setShowModal] = useState(false);


    const handleSave = ()=>{
        setShowModal(false);
        router.replace('/(app)/(caloriesAndGlucose)/glucose/glucoseGraph')
    }

    const handleClose = ()=>{
        setShowModal(false);
    }


  return (
    <View style={{flex:1}}>
      
      <View style={styles.header}>
        <Text style={styles.headerText}>Tracking Glucose</Text>
      </View>


    <ScrollView style={styles.formContainer}>

      {/*CAMERA LOGGING*/}
      <Pressable style={styles.cameraButtonContainer}>
      <FontAwesome name="camera" size={20} color="white" />
      <Text style={{fontFamily:"Poppins-Bold",fontSize:13, color:"white"}}>Camera Logging</Text>
      </Pressable>
      {/*------------------*/}

      <Text style={{fontFamily:"Poppins-Bold",fontSize:20,textAlign:"center",marginTop:25}}>Add Reading</Text>
      <TextInput
         style={styles.input}
         onChangeText={handleInputChange}
         value={glucoseInput}
         placeholder="0.0"
         placeholderTextColor="#ccc"
         keyboardType="decimal-pad"
         textAlign="center"
        />
      <Text style={{fontFamily:"Poppins-Medium",fontSize:20,textAlign:"center",marginVertical:15}}>mmo/L</Text>

      <View style={styles.dateTimeContainer}>
        <Text style={{fontFamily:"Poppins-Light",fontSize:18}}>Date</Text>
        <Pressable style={styles.dateTimeButton} onPress={()=>setShowDatePicker(true)}>
        <FontAwesome6 name="clock" size={24} color="#d86978" />
          <Text style={styles.dateTimeButtonText}>{formatDate(date)}</Text>
        </Pressable>
      </View>


      <View style={styles.dateTimeContainer}>
        <Text style={{fontFamily:"Poppins-Light",fontSize:18}}>Time</Text>
        <Pressable style={styles.dateTimeButton} onPress={() => setShowTimePicker(true)}>
        <FontAwesome6 name="clock" size={24} color="#d86978" />
          <Text style={styles.dateTimeButtonText}>{formatTime(time)}</Text>
        </Pressable>
      </View>

      <View style={styles.periodSelectorContainer}>
          <PeriodSelector 
          periodText="Before Meals"
          handleSelectPeriod={handleLoggedPeriod}
          periodSvg={<MaterialCommunityIcons name="food-apple" size={30} color="#DB1425" />}
          loggedPeriod={loggedPeriod}
          />
         <PeriodSelector 
          periodText="After Meals"
          handleSelectPeriod={handleLoggedPeriod}
          periodSvg={<Fontisto name="apple" size={30} color="#DB1425" />}
          loggedPeriod={loggedPeriod}
          />
      
      </View>

      <Pressable style={{padding:15,backgroundColor:"#DB8189",width:"70%",alignSelf:"center",borderRadius:5,marginBottom:40}} onPress={()=>setShowModal(true)}>
        <Text style={{textAlign:"center",fontFamily:"Poppins-Bold",color:"white"}}>Log Information</Text>  
      </Pressable>      



    </ScrollView>

      {/* Date Picker Modal */}
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={handleDateChange}
        />
      )}

      {/* Time Picker Modal */}
      {showTimePicker && (
        <DateTimePicker
          value={time}
          mode="time"
          is24Hour={false}
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={handleTimeChange}
        />
      )}

        {showModal && 
        <CustomModal 
        showModal={showModal} 
        handleSave={handleSave} 
        handleClose={handleClose}
        themeColor="#DB8189"
        successMessage="Logging successful"
        message='Log Information'
        icon={<FontAwesome name="book" size={50} color="#DB8189" />}/>}


    </View>
  )
}


const styles = StyleSheet.create({
  header:{
    height:200,
    backgroundColor:"#DB8189",
    padding:20
  },

  headerText:{
    fontFamily:"Poppins-Bold",
    fontSize:20,
    color:"white"
  },

  formContainer:{
    borderWidth:2,
    borderColor:"#D9D9D9",
    width:"90%",
    height:"80%",
    position:"absolute",
    marginTop:"20%",
    alignSelf:"center",
    backgroundColor:"white",
    borderRadius:15,
    padding:10
  },



  cameraButtonContainer:{
    flexDirection:'row',
    width:"60%",
    padding:15,
    backgroundColor:"#DB8189",
    alignSelf:"flex-end",
    borderRadius:15,
    justifyContent:"space-between",
    
  },

  input:{
    alignSelf:"center",
    height:150,
    borderWidth:2,
    borderColor:"#D9D9D9",
    width:"50%",
    fontWeight:"bold",
    color: "#d86978", // Pinkish color for the text
    textAlign: "center",
    marginTop:20,
    borderRadius:10,
    fontSize:30
  },

  dateTimeContainer:{
    borderTopWidth:1,
    borderColor:"#B8B8B8",
    padding:10,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
    
  },

  dateTimeButton:{
    padding:5,
    borderWidth:1,
    borderRadius:5,
    flexDirection:"row",
    gap:10,
    alignItems:"center",
    borderColor:"#d86978"
  },

  dateTimeButtonText:{
    color: "#d86978", // Pinkish color for the text
  },

  periodSelectorContainer:{
    backgroundColor:"#FFD3DA",
    height:100,
    marginVertical:20,
    borderRadius:5,
    justifyContent:"space-evenly",
    flexDirection:"row",
    alignItems:"center",
    paddingHorizontal:5
  }
  

})