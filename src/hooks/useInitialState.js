import { useState } from "react";

const initialState = {
  cart: [],
}

const useInitialState = () => {
  const [state, setSteta] = useState(initialState)
  
  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload]
    })
  }
  return {
    state,
    addToCart
  }
}

export default useInitialState