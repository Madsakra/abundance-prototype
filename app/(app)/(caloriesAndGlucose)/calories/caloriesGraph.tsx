import { useEffect, useState } from "react";
import { Dimensions, Pressable, ScrollView, Text, View } from "react-native";
import { RecordCardProps } from "~/app-env";
import CustomLineChart from "~/components/CustomLineChart";
import * as DB from '../../../../sqlDatabase'
import RecordsTable from "~/UI/Dashboard/RecordsTable";
import { Link } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import TopDateSelector from "~/components/TopDateSelector";


export default function caloriesGraph() {

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
                borderColor:'#C68F5E'
            }}
            />
        );
    };
  
  
    const customLabel = (val:string) => {
        return (
            <View style={{width: 70, marginLeft: 7}}>
                <Text style=
                {{ fontWeight: 'bold',color: '#C68F5E'}}
                 >{val}</Text>
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






  const [records,setRecords] = useState<RecordCardProps[]>([]);
  const [loading,setLoading] = useState(true);
  const [recordsOutput,setRecordsOutput] = useState<RecordCardProps[]>([]);


  const queryDB = async ()=>{
      const queryRecord = await DB.db.getAllAsync('SELECT * FROM CaloriesIntake');
      let tempContainer:RecordCardProps[] = [];
      for (const record of queryRecord)
      {
          
          const typedArticle = record as RecordCardProps;
          tempContainer.push(typedArticle);
      }

      setRecords(tempContainer);

      const queryOutput = await DB.db.getAllAsync('SELECT * FROM CaloriesOutput');
      let tempOutput:RecordCardProps[] = [];
      for (const record of queryOutput)
      {
          
          const typedOutput = record as RecordCardProps;
          tempOutput.push(typedOutput);
      }

      setRecordsOutput(tempOutput);
      setLoading(false);
  }


  const calorieIntakeImages = require("assets/testImages/placeholder.jpg");
    const calorieOutputImages = require("assets/testImages/burnFats.jpg");

 // NET RECORD
 const netRecords:RecordCardProps[] = [
    {
        id:1,
        foodName:"Total Intake",
        unitMeasurement:"Kcal",
        calories:450,
    },
    {
        id:2,
        foodName:"Total Output",
        unitMeasurement:"Kcal",
        calories:295,
    },


  ]








  


  useEffect(()=>{
    queryDB();
  },[])





  if (loading)
  {
    return <Text>Loading...</Text>
  }










  return (

    <View style={{flex:1}}>
    <TopDateSelector themeColor="#C68F5E"/>
  <ScrollView style={{padding:20}}>

    <View style={{width:width90,height:height50,borderWidth:1,padding:20, borderColor:"#C68F5E",borderRadius:10,marginBottom:30}}>
    <CustomLineChart 
          headerName="Calories Consumed"
          trackingUnit="Kcal"
          data={caloriesData}
          graphColor="#C68F5E"
          gradientStart='rgb(237,221,206)'
          gradientEnd='rgb(198,143,94)'
          /> 
    </View>

    <Link href="/calories/caloriesInput" 
    style={{borderWidth:2,borderColor:"#C68F5E",padding:20,width:"70%",marginBottom:30,borderRadius:5}}>
    <View style={{gap:5}}>
    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
    <Text style={{fontFamily:"Poppins-Bold",fontSize:20,color:"#C68F5E"}}>Log Input</Text>
    <FontAwesome name="book" size={24} color="#C68F5E" style={{marginBottom:10}}/>

    </View>
    <Text style={{fontFamily:"Poppins-Medium", fontSize:15,color:"#C68F5E"}}>Record Your Calorie Intake and Ouput</Text>


    </View>
    </Link>


    <RecordsTable 
              tableHeader="Calories Intake"
              tableData={records}
              image={calorieIntakeImages}
              totalCalories={450}
              finalTabName="Total Calories Intake"
             
              />
          <RecordsTable 
          tableHeader="Calories Output"
          tableData={recordsOutput}
          image={calorieOutputImages}
          totalCalories={295}
          finalTabName="Total Calories Output"
         
          />  

      <RecordsTable 
          tableHeader="Net Calorie Intake"
          tableData={netRecords}
          totalCalories={295}
          finalTabName="Net Calories Intake"
          />


  </ScrollView>
  </View>

  )
}
