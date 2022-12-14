import {
    collection,
    doc,
    getDocs,
    orderBy,
    query,
    setDoc,
  } from "firebase/firestore";
  import { firestore } from "../firebase.config";
  
  // Saving new Item
  export const saveItem = async (data) => {
    await setDoc(doc(firestore, "foodItems", "drinkItems" `${Date.now()}`), data, {
      merge: true,
    });
  };
  
  // getall food items
  export const getAllFoodItems = async () => {
    const items = await getDocs(
      query(collection(firestore, "foodItems"), orderBy("id", "desc"))
    );
  
    return items.docs.map((doc) => doc.data());
  };

  export const getAllDrinkItems = async () => {
    const items = await getDocs(
      query(collection(firestore, "drinkItems"), orderBy("id", "desc"))
    );
    return items.docs.map((doc) => doc.data());
  }
  
  