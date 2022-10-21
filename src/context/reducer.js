export const actionType = {
    SET_USER: "SET_USER",
    SET_FOOD_ITEMS: "SET_FOOD_ITEMS",
    SET_CART_SHOW: "SET_CART_SHOW",
    SET_CARTITEMS: "SET_CARTITEMS",
  };

  const reducer = (state, action) => {
    // console.log(action);
  
    switch (action.type) {
      case actionType.SET_USER:
        return {
          ...state,
          user: action.user,
        };
       /* <div className='flex items-center gap-2 justify-center bg-orange-100
        p-2 py-1  rounded-full'>
          <p className='text-base text-orange-500 font-semibold'> Bike Delivery</p>
        <div className='w-6 h-6  bg-white rounded-full overflow-hidden drop-shadow-xl'>
        <img
        src= {Delivery} 
        className= "w-full h-full object-contain" alt='delivery' />
       </div>
        </div>*/
      /* case actionType.SET_FOOD_ITEMS:
        return {
          ...state,
          foodItems: action.foodItems,
        };
  
      case actionType.SET_CART_SHOW:
        return {
          ...state,
          cartShow: action.cartShow,
        };
  
      case actionType.SET_CARTITEMS:
        return {
          ...state,
          cartItems: action.cartItems,
        };*/
  
      default:
        return state;
    }
  };
  
  export default reducer;

  