import { Dimensions, Text, View } from "react-native";
import CustomLineChart from "~/components/CustomLineChart";


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




  return (
  <View style={{flex:1,padding:20}}>
    <View style={{width:width90,height:height50,borderWidth:1,padding:20, borderColor:"#C68F5E",borderRadius:10}}>
    <CustomLineChart 
          headerName="Calories Consumed"
          trackingUnit="Kcal"
          data={caloriesData}
          graphColor="#C68F5E"
          gradientStart='rgb(237,221,206)'
          gradientEnd='rgb(198,143,94)'
          
          /> 

    </View>



  </View>
  )
}
