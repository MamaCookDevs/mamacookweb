import React, {useState, useEffect} from 'react'
import { useStateValue } from "../context/StateProvider";

const CartContainer = () => {
    const [{ cartShow, cartItems, user}, dispatch] = useStateValue()
    const [flag, setFlag] = useState(1);
    const [tot, setTot] = useState(0);
    
    const showCart = () => {
        dispatch({ 
          type : actionType.SET_CART_SHOW,
          cartShow: !cartShow,
        });
      }
      useEffect(() => {
        let totalPrice = cartItems.reduce(function (accumulator, item) {
          return accumulator + item.qty * item.price;
        }, 0);
        setTot(totalPrice);
        console.log(tot);
      }, [tot, flag]);

      const clearCart = () => {
        dispatch({
          type: actionType.SET_CARTITEMS,
          cartItems: [],
        });
    
        localStorage.setItem("cartItems", JSON.stringify([]));
      };

  return (
    <div className='fixed-top-0 right-0 w-full md:w-375 h-screen bg-black drop-shadow-md 
    flex flex-col'>CartContainer</div>
  )
}
