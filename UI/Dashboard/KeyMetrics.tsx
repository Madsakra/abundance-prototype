import { useState } from "react";
import { Pressable, StyleSheet,Text,View } from "react-native"
import CustomLineChart from "~/components/CustomLineChart";
import MetricsSummary from "~/components/MetricsSummary";

type KeyMetricsProps = {
  activeTab: 'calories' | 'glucose',
  setActiveTab: (tabChange:'calories'|'glucose') => void;
}


export default function KeyMetrics({activeTab,setActiveTab}:KeyMetricsProps) {


    const handleCaloriesTab = ()=>{
        setActiveTab('calories')
    }


    const handleGlucoseTab = ()=>{
        setActiveTab('glucose')
    }


    const customDataPoint = () => {
      return (
          <View
          style={[{
              width: 20,
              height: 20,
              backgroundColor: 'white',
              borderWidth: 1,
              borderRadius: 10,
             
          }, activeTab==='calories'? { borderColor: '#C68F5E'}: { borderColor: '#DB8189',}]}
          />
      );
  };





  const customLabel = (val:string) => {
      return (
          <View style={{width: 70, marginLeft: 7}}>
              <Text style={[{ fontWeight: 'bold'},activeTab==='calories'?{ color: '#C68F5E'}: { color: '#DB8189',}]}>{val}</Text>
          </View>
      );
  };

















    const caloriesData = [
        {value: 1350, labelComponent:()=>customLabel('7.30 am'), customDataPoint: customDataPoint},
        {value: 600, labelComponent:()=>customLabel('12.30 pm'), customDataPoint: customDataPoint},

        {value: 300, labelComponent:()=>customLabel('3.30 pm'), customDataPoint: customDataPoint},
        {value: 1200, labelComponent:()=>customLabel('7.30 pm'), customDataPoint: customDataPoint},
        
        {value: 600, labelComponent:()=>customLabel('9.30 pm'), customDataPoint: customDataPoint},

 
      ];

      const glucoseData = [
        {value: 5.6, labelComponent:()=>customLabel('7.30 am'), customDataPoint: customDataPoint},
        {value: 8.4, labelComponent:()=>customLabel('12.30 pm'), customDataPoint: customDataPoint},
        {value: 6.6, labelComponent:()=>customLabel('3.30 pm'), customDataPoint: customDataPoint},
        {value: 7.5, labelComponent:()=>customLabel('7.30 pm'), customDataPoint: customDataPoint},
 
      ];

  
     



  return (
    <View style={styles.container}>

    {/* Top Navigation */}
    <View style={styles.navigation}>
        <Pressable style={activeTab==='calories'?styles.selectedNav:styles.nonSelectedNav} onPress={handleCaloriesTab}>
        <Text style={[styles.tabWords,activeTab==='calories' && {color:"#C68F5E"}]}>Calories</Text>
        </Pressable>
       
        <Pressable style={activeTab==='glucose'?styles.selectedNav:styles.nonSelectedNav} onPress={handleGlucoseTab}>
        <Text style={[styles.tabWords,activeTab==='glucose' && {color:"#DB8189"}]}>Glucose</Text>
        </Pressable>
    </View>

    {/*----------------------------------------------------------------------------- */}
  

      {/* Chart Section */}
      <View style={styles.chartContainer}>

      {
          activeTab === 'calories'? 
          <CustomLineChart 
          headerName="Calories Tracker"
          trackingUnit="Kcal"
          data={caloriesData}
          graphColor="#C68F5E"
          gradientStart='rgb(237,221,206)'
          gradientEnd='rgb(198,143,94)'
          
          />     
          :
          <CustomLineChart 
          headerName="Glucose Levels"
          trackingUnit="mmo / L"
          data={glucoseData}
          graphColor="#DB8189"
          gradientStart='rgb(219,129,137)'
          gradientEnd='rgb(255, 234, 237)'
          
          />
      }
      </View>

    {/*----------------------------------------------------------------------------- */}


      {/* Summary */}

    


      {activeTab === 'calories'?
      <>
      <MetricsSummary
      mainColor="#C68F5E"
      infoHeader="Latest Consumed Calories"
      dataValue={(caloriesData[caloriesData.length-1].value).toString()}
      trackingUnit="Kcal"

      containerStyle={styles.summaryContainer}
      headerStyle={styles.summaryHeader}
      valueText={styles.summaryValue}
      />

      <MetricsSummary
      mainColor="#C68F5E"
      infoHeader="Total Calories Consumed"
      dataValue={(caloriesData.reduce((acc,cur) => acc+cur.value,0)).toString()}
      trackingUnit="Kcal"

      containerStyle={styles.summaryContainer}
      headerStyle={styles.summaryHeader}
      valueText={styles.summaryValue}
      />

      </>
      :  
      <>
      <MetricsSummary
      mainColor="#DB8189"
      infoHeader="Latest Glucose Levels"
      dataValue={(glucoseData[glucoseData.length-1].value).toString()}
      trackingUnit="mmo / L"

      containerStyle={styles.summaryContainer}
      headerStyle={styles.summaryHeader}
      valueText={styles.summaryValue}
      />

      <MetricsSummary
      mainColor="#DB8189"
      infoHeader="Highest Glucose Level"
      dataValue={(Math.max(...glucoseData.map(item => item.value))).toString()}
      trackingUnit="mmo / L"

      containerStyle={styles.summaryContainer}
      headerStyle={styles.summaryHeader}
      valueText={styles.summaryValue}
      />

      </>
    
    }


   








    </View>
  )
}



const styles = StyleSheet.create({
    container:{
        padding:12,
        height:"auto",
        borderWidth:1,
        borderColor:"#DCDCDC",
        borderRadius:10,
        marginBottom:"5%"
    },

    navigation:{
        borderRadius:10,
        backgroundColor:"#D9D9D9",
        flexDirection:"row",
        padding:10,
        

    },

    nonSelectedNav:{
        padding:5,
        borderRadius:10,
        width:"50%",

    },

    selectedNav:{
        padding:5,
        borderRadius:10,
        width:"50%",
        backgroundColor:"white"
    },

    tabWords:{
        textAlign:"center",fontFamily:"Poppins-Medium",fontSize:15
    },

    chartContainer: {
        backgroundColor: 'white',
        padding:20,
        borderRadius: 8,
        marginVertical: 16,
        borderWidth:2,
        borderColor:"#ECE9E9"

      },
      chartTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
      },
      chartValue: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
      },
      chartOrders: {
        fontSize: 14,
        color: '#888',
        marginBottom: 16,
      },
      chart: {
        marginTop: 16,
      },


      summaryContainer:{
        borderWidth:2,
        width:"100%",
        height:'auto',
        marginBottom:10,
        borderRadius:10,
        borderColor:"#ECE9E9",
        padding:10
      },

      summaryHeader:{
        fontFamily:"Poppins-Bold",
        fontSize:14,
        marginLeft:10
      },

      summaryValue:{
        marginLeft:10, 
        fontFamily:"Poppins-Black",
        fontSize:20
      },

})