import { Entypo } from "@expo/vector-icons"
import { Link, router } from "expo-router"
import { StyleSheet, Text, View } from "react-native"
import { useEffect, useState } from "react";
import { SvgProps } from "react-native-svg";
import { FlashList } from "@shopify/flash-list";
import PressableTab from "~/components/PressableTab";
import { toggleItemInList } from "~/util";
import FunctionTiedButton from "~/components/FunctionTiedButton";

import FireIcon from "~/testComponents/firesvg";
import CubeSvg from "~/testComponents/cubeSvg";
import LoadingAnimation from "~/components/LoadingAnimation";

type Goal = {
  id: number;
  name: string;
  value: number;
  SvgIcon?: React.FC<SvgProps>;
};


const allGoals:Goal[] = [
  {id:1,name:"< 1800 kcal / day",value:1800,SvgIcon:FireIcon},
  {id:2,name:"< 2000 kcal / day",value:2000,SvgIcon:FireIcon},
  {id:3,name:"< 2200 kcal / day",value:2200,SvgIcon:FireIcon},
  {id:4,name:"< 5.0 mmo/L before Food",value:5.0,SvgIcon:CubeSvg},
  {id:5,name:"< 6.0 mmo/L before Food",value:6.0,SvgIcon:CubeSvg},
  {id:6,name:"< 7.0 mmo/L after Food",value:7.0,SvgIcon:CubeSvg},



]

export default function goalSetting() {

  const [profileGoals,setProfileGoals] = useState<Goal[]>([])
  const [loading,setLoading] = useState(false)

  const handleGoals = (goal: { id: number; name: string; value: number }) => {
    toggleItemInList(goal,setProfileGoals);
  };

  const nextSection = ()=>{
    setLoading(true);
    // TO COMPILE EVERYTHING FROM SQL LITE AND SEND TO DB
    // AFTER THAT REDIRECT USER TO THE SUCCESS PAGE

    setTimeout(() => {
      setLoading(false);
      router.replace('/(profileCreation)/profileCreated')
    
    },2000);
  }


  
  return (
    <View style={{flex:1}}>
        
    <Link href="/(profileCreation)/healthInformation" style={{padding:25}}>
        <Entypo name="chevron-thin-left" size={24} color="black" />
    </Link>

    <Text style={styles.header}>Goal Setting <Entypo name="flag" size={30} color="black" /></Text>


    <View style={{ height: '50%', marginTop: 20}}>
      <Text style={styles.listHeader}>
        Select up to 3 Goals. You can change it later.
      </Text>
      <FlashList
        data={allGoals}
        renderItem={({ item }) => (
          <PressableTab
            editable={true}
            tabBoxStyle={styles.tabBox}
            handleInfo={handleGoals}
            tabTextStyle={styles.tabTextStyle}
            tabValue={item} // This now matches the expected type
            SvgIcon={item.SvgIcon}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        estimatedItemSize={100}
        numColumns={1}
        contentContainerStyle={styles.listContainer}
      />
    </View>



    <FunctionTiedButton
            buttonStyle={styles.buttonBox}
            onPress={nextSection}
            textStyle={styles.buttonText}
            title="Next"
        />


    {loading && <LoadingAnimation/>}

  
    </View>
  )
}
const styles = StyleSheet.create({
    header:{
        fontFamily:"Poppins-Bold",
        fontSize:40, 
        textAlign:"center",
        paddingVertical:10,
    },

    listHeader:{
      paddingLeft:25,
      fontFamily:'Poppins-SemiBold',
      fontSize:20
  },

  tabBox:{
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    flexDirection:"row",
    padding:25,
    alignContent:"center",
    marginHorizontal: 4,
    marginVertical:5,
    flexGrow:1,
    gap:20
    
},



tabTextStyle:{
    fontFamily:"Poppins-SemiBold",
    fontSize:18, 
    color:"white",

    height:"100%"
},

listContainer: {
  padding:20,
  
},

buttonBox:{
  backgroundColor:"#8797DA",
  borderRadius:5,
  marginTop:"20%",
  width:"90%",
  alignSelf:"center"
},

buttonText:{
  fontFamily:"Poppins-Bold",
  fontSize:20,color:"white",
  padding:10,
  textAlign:"center"
}


}

)