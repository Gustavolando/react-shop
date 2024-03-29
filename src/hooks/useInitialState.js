import { useState } from "react";

const initialState = {
  cart: [],
}
const useInitialState = () => {
  const [state, setState] = useState(initialState)
  
  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload]
    })
  }

  const removeFromCart = (indexValue) => {
    setState({
      ...state,
      cart: state.cart.filter((_,index) => index !== indexValue)
    })
  }

  const isInCart = (productId) => {
    return state.cart.some(product => product.id === productId)
  }

  return {
    state,
    addToCart,
    removeFromCart,
    isInCart
  }
}

export default useInitialState