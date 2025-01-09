import AsyncStorage from "@react-native-async-storage/async-storage";

export const toggleItemInList = <T>( item: T, setState: React.Dispatch<React.SetStateAction<T[]>>) => {
    setState((prevList) => {
      const itemExists = prevList.includes(item); // Will work for any type
      return itemExists ? prevList.filter((listItem) => listItem !== item) : [...prevList, item];
    });
  };



  export const updateLocalProfileFields = async (fields: Record<string, any>) => {
    try {
        // Retrieve the existing profile data
        const existingData = await AsyncStorage.getItem('profileData');
        const profile = existingData ? JSON.parse(existingData) : {};

        // Merge the new fields into the profile data
        Object.keys(fields).forEach((key) => {
            profile[key] = fields[key];
        });

        // Save the updated profile data back to AsyncStorage
        await AsyncStorage.setItem('profileData', JSON.stringify(profile));

    } catch (error) {
        console.error('Failed to update profile data:', error);
    }
};