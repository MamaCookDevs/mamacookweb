import { fetchUser } from "../utils/fecthLocalStorageData";

const userInfo= fetchUser()

export const initialState = {
    user: userInfo,
    foodItems: null,
    cartShow: null,
    cartItems: null,
  };

 