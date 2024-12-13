import React, { useState } from 'react'
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format, addDays,isSameDay } from 'date-fns';
import { AntDesign } from '@expo/vector-icons';

// TO BE REFACTORED AGAIN DUE TO TIME
type TopDateSelectorProps ={
    themeColor:string;
}



export default function TopDateSelector({themeColor}:TopDateSelectorProps) {
  
  
const [selectedDate, setSelectedDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const today = new Date();
  const handlePreviousDay = () => {
    setSelectedDate((prevDate) => addDays(prevDate, -1));
  };

  const handleNextDay = () => {
    // Prevent moving to the next day if the selected date matches today
    if (!isSameDay(selectedDate, today)) {
      setSelectedDate((prevDate) => addDays(prevDate, 1));
    }
  };

  const handleDateChange = (event: any, date?: Date) => {
    setShowPicker(false); // Close the picker
    if (date) {
      setSelectedDate(date); // Update the selected date
    }
  };

  const openDatePicker = () => {
    setShowPicker(true);
  };
  
  

  
    return (

        <View style={[styles.container,{backgroundColor:themeColor}]}>
        {/* Previous Day Button */}
        <TouchableOpacity onPress={handlePreviousDay} style={styles.arrowButton}>
        <AntDesign name="left" size={24} color="white" />
        </TouchableOpacity>
  
        {/* Current Date */}
        <TouchableOpacity onPress={openDatePicker} style={{flexDirection:'row'}}>
            <AntDesign name="calendar" size={24} color="white" />
          <Text style={styles.dateText}>{format(selectedDate, 'EEEE, MMM d, yyyy')}</Text>
        </TouchableOpacity>
  
        {/* Next Day Button */}
        <TouchableOpacity onPress={handleNextDay} style={styles.arrowButton}>
        <AntDesign name="right" size={24} color="white" />
        </TouchableOpacity>
  
        {/* Date Picker Modal */}
        {showPicker && (
          <DateTimePicker
            value={selectedDate}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={handleDateChange}
            maximumDate={today}
          />
        )}
      </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 14,
    },
    arrowButton: {
      padding: 10,
    },
  
    dateText: {
      marginHorizontal: 12,
      fontSize: 18,
      fontWeight: '600',
      color: 'white', // Highlight the date to show it's clickable
    },
  });