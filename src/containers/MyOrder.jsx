import React, { useContext } from 'react'
import OrderItem from '@components/OrderItem'
import AppContext from '@context/AppContext'
import '@styles/MyOrder.scss'

import flechita from '@icons/flechita.svg'

const MyOrder = ( { onCerrar } ) => {
  const { state } = useContext(AppContext)
  const sumTotal = () => {
    const reducer = (total, item) => total += item.price
    return state.cart.reduce(reducer, 0)
  }
  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={flechita} alt="arrow" onClick={onCerrar} />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        <div className="orderItem-container">
          {state.cart.map((item, index) => (
            <OrderItem product={item} key={`orderItem-${index}`} indexValue={index} />
          ))}
        </div>
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <button className="primary-button">
          Checkout
        </button>
      </div>
    </aside>

  )
}

export default MyOrder