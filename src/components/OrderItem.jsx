import React from 'react'
import '../styles/OrderItem.scss'

const OrderItem = () => {
  return (
    // <div className="order">
    //   <p>
    //     <span>12.21.21</span>
    //     <span>6 articles</span>
    //   </p>
    //   <p>$ 560.00</p>
    //   <img src="./icons/flechita.svg" alt="arrow" />
    // </div>
    <div className="OrderItem">
      <figure>
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Bike" />
      </figure>
      <p>Bike</p>
      <p>$ 130.00</p>
      <img src="./icons/icon_close.png" alt />
    </div>
  )
}

export default OrderItem