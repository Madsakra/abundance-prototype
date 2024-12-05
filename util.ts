export const toggleItemInList = <T>( item: T, setState: React.Dispatch<React.SetStateAction<T[]>>) => {
    setState((prevList) => {
      const itemExists = prevList.includes(item); // Will work for any type
      return itemExists ? prevList.filter((listItem) => listItem !== item) : [...prevList, item];
    });
  };