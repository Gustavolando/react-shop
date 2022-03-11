import React from 'react'
import OrderItem from '../components/OrderItem'
// import ShoppingCartItem from '../components/ShoppingCartItem'
import '../styles/Checkout.scss'
// import Menu from '../components/Menu'

const Checkout = () => {
  return (
    <div className="Checkout">
      <div className="Checkout-container">
        <h1 className="title">My order</h1>
        <div className="Checkout-content">
          <div className="order">
            <p>
              <span>12.21.21</span>
              <span>6 articles</span>
            </p>
            <p>$ 560.00</p>
          </div>
        </div>
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </div>
    </div>
  )
}

export default Checkout