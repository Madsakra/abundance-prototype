import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";
import { Platform, StyleSheet, Text, TouchableOpacity,View } from "react-native";

import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';


export default function DatePicker() {



    const [date, setDate] = useState<Date | null>(null); 
    const [mode, setMode] = useState<'date' | 'time'>('date');
    const [show, setShow] = useState<boolean>(false);
  

      const showPicker = ()=>{
        setShow(true);
        setMode('date');
       }

  
       const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
        const currentDate = selectedDate
        setShow(Platform.OS === 'ios');

        if (currentDate)
        {
            setDate(currentDate);
        }
        
        

      };

  return (
<View style={styles.container}>

<Text style={styles.label}>Birthdate</Text>
    <TouchableOpacity onPress={showPicker} style={styles.dateTimePickerTouch}>
    <AntDesign name="calendar" size={25} color="white" />
    {date? <Text style={{color:'white'}}>{date.toLocaleDateString()}</Text>
    : 
    <Text style={{fontFamily:'Poppins-Regular',fontSize:15,color:'white'}}>Choose your Birthdate</Text>
    }
    </TouchableOpacity>


    {show && (
            <DateTimePicker
            value={date || new Date()}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
            />)}



</View>
  )
}



const styles = StyleSheet.create({

    container:{  
       
    
          
    },

  label: {
    fontSize: 16,
    marginBottom: 8,
    color:'#505050',
    fontFamily:'Poppins-Regular'
  },

    dateTimePickerTouch:{
        height:60,
        borderRadius:5,
        width:"100%",
        flexDirection:'row',
        gap:10,
        alignItems:'center',
        color:'white',
        backgroundColor: '#8797DA',   
        paddingLeft:20,
    
    },
})