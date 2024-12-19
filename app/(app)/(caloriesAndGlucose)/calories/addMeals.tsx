import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useEffect, useState } from 'react';
import { FlashList } from '@shopify/flash-list';
import RecordCard from '~/components/RecordCard';
import { RecordCardProps } from '~/app-env';
import * as DB from '../../../../sqlDatabase'
import { Link } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';



export default function addMeals() {

  const [foodName,setFoodName] = useState<string>("");

  const calorieOptionsImages = [
    require("assets/calorieImages/applePie.jpg"),
    require("assets/calorieImages/burrito.jpg"),
    require("assets/calorieImages/coke.jpg"),
    require("assets/calorieImages/dumplings.jpg"),
    require("assets/calorieImages/eggplantParm.jpg"),
    require("assets/calorieImages/fettu.jpg"),

  ]


  const [records,setRecords] = useState<RecordCardProps[]>([]);
  const [loading,setLoading] = useState(true);
  const [filteredRecords, setFilteredRecords] = useState(records);

  const queryDB = async () => {
    const queryRecord = await DB.db.getAllAsync('SELECT * FROM FoodOptions');
    let tempContainer: RecordCardProps[] = [];
    for (const record of queryRecord) {
      const typedArticle = record as RecordCardProps;
      tempContainer.push(typedArticle);
    }
    setRecords(tempContainer);
    // setFilteredRecords(tempContainer); // Show all records initially
    setLoading(false);
  };

  const handleSearch = () => {
    // Filter records based on the search input
    const filtered = records.filter((record) =>
      record.foodName.toLowerCase().startsWith(foodName.toLowerCase())
    );
    setFilteredRecords(filtered);
  };


  const customAddButton = (foodID:number)=>{
    const stringifiedID = String(foodID)
    return (
      <Link 

      href={{
        pathname: "/(app)/(caloriesAndGlucose)/calories/[foodID]",
        params: { foodID: stringifiedID},
      }}

      style={{  
        padding:20,
        backgroundColor:"#D9D9D9",
        borderRadius:5,
        justifyContent:"center",
        alignItems:"center"}}>
        <AntDesign name="plus" size={24} color="black" />
      </Link>
    )
  }


  useEffect(()=>{
    queryDB();
  },[])

  if (loading)
  {
    return <Text>Loading...</Text>
  }


  return (
    <View style={{flex:1}}>

            {/*search Top Section*/}
            <View style={{backgroundColor:"#C68F5E",height:180,padding:15}}>
              <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
              <Text style={{fontFamily:"Poppins-Bold",color:"white",fontSize:18}}>Add Meals</Text>

              <Pressable style={{backgroundColor:"white",borderRadius:5,flexDirection:'row',padding:12,gap:10}}>
              <FontAwesome name="camera" size={24} color="#C68F5E" />
                <Text style={{fontFamily:"Poppins-Bold", color:"#C68F5E",fontSize:15}}>Scan Food</Text>
              </Pressable>
              </View>
             

              <View style={{ flexDirection: 'row',marginTop:15}}>
          <TextInput
            style={[styles.inputContainerStyle, { flex: 1 }]}
            onChangeText={setFoodName}
            value={foodName}
            placeholder="Search For Food Name"
          />
          <Pressable onPress={handleSearch} style={styles.searchButton}>
          <AntDesign name="search1" size={24} color="#C68F5E" />
          </Pressable>
        </View>


            </View>

            <View style={{height:350}}>
              {/* SINGLE ITEM COMPONENT -- TO USE FLASH LIST AND RENDER ALL*/}
              <FlashList
              data={filteredRecords}
              estimatedItemSize={250}
              nestedScrollEnabled={true}
              renderItem={({item,index})=>
              <RecordCard
              id={item.id}
              key={index}
              foodName={item.foodName}
              calories={item.calories}
              unitMeasurement={item.unitMeasurement}
              protein={item.protein}
              carbs={item.carbs}
              customButton={customAddButton(item.id)}
              image={calorieOptionsImages[item.id-1]}
              />
              
            }
            />
            </View>

            <Link href="/calories/caloriesInput" style={styles.bottomButton}>
              <Text style={styles.buttonText}>Go Back</Text>
            </Link>

    </View>
  )
}


const styles = StyleSheet.create({
  inputContainerStyle:{
   
    padding:20,
    borderRadius:5,
    backgroundColor:"white",

  },

  bottomButton:{
    backgroundColor:"#D9D9D9",
    padding:15,
    width:"80%",
    borderRadius:10,
    alignSelf:"center",
    marginTop:"10%",
  },

  buttonText:{
    textAlign:"center",
    fontFamily:"Poppins-Bold",
    fontSize:20,
  },

  searchButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButtonText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
    color: '#C68F5E',
  },
})