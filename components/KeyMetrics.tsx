import { useState } from "react";
import { Pressable, StyleSheet,Text,View } from "react-native"
import { LineChart } from "react-native-gifted-charts"


export default function KeyMetrics() {

    const [activeTab, setActiveTab] = useState<'calories' | 'glucose'>('calories'); 

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
              borderWidth: 4,
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
 
      ];

      const glucoseData = [
        {value: 5.6, labelComponent:()=>customLabel('7.30 am'), customDataPoint: customDataPoint},
        {value: 6.4, labelComponent:()=>customLabel('12.30 pm'), customDataPoint: customDataPoint},
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
          <>
          <Text style={{fontFamily:"Poppins-Bold",fontSize:20,color:"#C68F5E"}}>Calories Consumed </Text>
          <Text style={{marginBottom:20,color:"#C68F5E",fontSize:15,fontFamily:"Poppins-SemiBold"}}>Kcal / serving</Text>
          <LineChart data={caloriesData}
               thickness={6}
               color="#C68F5E"
               isAnimated
               noOfSections={4}
               areaChart
               yAxisTextStyle={{color: '#C68F5E'}}
    
           
               startFillColor={'rgb(237,221,206)'}
              
               endFillColor={'rgb(198,143,94)'}
               startOpacity={0.4}
               endOpacity={0.4}
              
               spacing={100}
               width={200}
               rulesColor="#CDCDCD"
               rulesType="solid"
               initialSpacing={40}
               yAxisColor="lightgray"
               xAxisColor="lightgray"
          />
        </>:

        <>
        <Text style={{fontFamily:"Poppins-Bold",fontSize:20,color:"#DB8189"}}>Glucose Levels </Text>
        <Text style={{marginBottom:20,color:"#DB8189",fontSize:15,fontFamily:"Poppins-SemiBold"}}>mmo/L </Text>
        <LineChart data={glucoseData}
            thickness={6}
            color="#DB8189"
            isAnimated
            noOfSections={4}
            areaChart
            yAxisTextStyle={{color: '#DB8189'}}

        
            startFillColor={'rgb(219,129,137)'}
            endFillColor={'rgb(255, 234, 237)'}
            startOpacity={0.4}
            endOpacity={0.4}
            
            spacing={100}
            width={200}
            rulesColor="#CDCDCD"
            rulesType="solid"
            initialSpacing={40}
            yAxisColor="lightgray"
            xAxisColor="lightgray"
        />
        </>


      }
     
      </View>











    </View>
  )
}



const styles = StyleSheet.create({
    container:{
        padding:12,
        height:"auto",
        borderWidth:1,
        borderColor:"#DCDCDC",
        borderRadius:10
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
        textAlign:"center",fontFamily:"Poppins-Bold",fontSize:15
    },

    chartContainer: {
        backgroundColor: '#D9D9D9',
        padding:20,
        borderRadius: 8,
        marginVertical: 16,

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

})