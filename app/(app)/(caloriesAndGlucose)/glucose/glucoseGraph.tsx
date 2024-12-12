import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CustomLineChart from '~/components/CustomLineChart';
import GlucoseDataRow from '~/components/GlucoseDataRow';

export default function glucoseGraph() {


    const { width, height } = Dimensions.get('window');

    // Calculate 90% of width and height
    const width90 = width * 0.9;
    const height50 = height * 0.5;

    const customDataPoint = () => {
      return (
          <View
          style={{
              width: 20,
              height: 20,
              backgroundColor: 'white',
              borderWidth: 1,
              borderRadius: 10,
              borderColor: '#DB8189'
             
          }}
          />
      );
  };


  const customLabel = (val:string) => {
      return (
          <View style={{width: 70, marginLeft: 7}}>
              <Text style={{ fontWeight: 'bold',color: '#DB8189'}}>{val}</Text>
          </View>
      );
  };

    const glucoseData = [
        {value: 5.6, labelComponent:()=>customLabel('7.30 am'), customDataPoint: customDataPoint},
        {value: 8.4, labelComponent:()=>customLabel('12.30 pm'), customDataPoint: customDataPoint},
        {value: 6.6, labelComponent:()=>customLabel('3.30 pm'), customDataPoint: customDataPoint},
        {value: 7.5, labelComponent:()=>customLabel('7.30 pm'), customDataPoint: customDataPoint},
 
      ];

    
    const glucoseTableData = [
        {date:"15/11/24",time:"7.30am",reading:5.6,period:"Pre-Meals"},
        {date:"15/11/24",time:"12.30pm",reading:8.4,period:"Post-Meals"},
        {date:"15/11/24",time:"3.30pm",reading:6.6,period:"Pre-Meals"},
        {date:"15/11/24",time:"7.30pm",reading:7.5,period:"Post-Meals"}


    ]




  return (
     <ScrollView style={{flex:1,padding:20}}>
   
       <View style={{width:width90,height:height50,borderWidth:1,padding:20, borderColor:"#DB8189",borderRadius:10,marginBottom:30}}>
         <CustomLineChart 
          headerName="Glucose Levels"
          trackingUnit="mmo / L"
          data={glucoseData}
          graphColor="#DB8189"
          gradientStart='rgb(219,129,137)'
          gradientEnd='rgb(255, 234, 237)'
          
          />
       </View>



        <View style={{width:width90,height:'auto',borderWidth:1,borderColor:"#DB8189",padding:10,borderRadius:5,marginBottom:50}}>

   {/*ROW 1 - Header*/}
   <View style={{flexDirection: "row", borderBottomWidth: 1, paddingBottom: 5,borderColor:"#DB8189"}}>
        <View style={{flex: 1}}>
            <Text style={styles.textHeader}>Date</Text>
        </View>
        <View style={{flex: 1}}>
            <Text style={styles.textHeader}>Time</Text>
        </View>
        <View style={{flex: 1}}>
            <Text style={styles.textHeader}>Value (mmo/L)</Text>
        </View>
        <View style={{flex: 1}}>
            <Text style={styles.textHeader}>Period</Text>
        </View>
    </View>

    {/*ROW 2 - Data*/}
    {glucoseTableData.map((item,index)=>
    <GlucoseDataRow
    key={index}
    date={item.date}
    time={item.time}
    reading={item.reading}
    period={item.period}
    />
    )}

        </View>


   </ScrollView>
  )
}

const styles = StyleSheet.create({
    textHeader:
    {
    fontFamily:"Poppins-Bold",
    fontSize:13,
    color:"#DB8189"
    },
    
 
})