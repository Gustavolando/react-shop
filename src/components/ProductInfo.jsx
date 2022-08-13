import React from 'react'
import '@styles/ProductInfo.scss'

import addToCart from '@icons/bt_add_to_cart.svg'

const ProductInfo = () => {
  return (
    <div className="product-info">
      <p>$ 35.00</p>
      <p>Bike</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ducimus dolorem sunt molestiae explicabo itaque voluptates minima cumque, qui perferendis, doloribus excepturi accusantium corporis repellendus!</p>
      <button className="primary-button add-to-cart-button">
        <img src={addToCart} alt="add to cart" />
        Add to cart
      </button>
    </div>
  )
}

export default ProductInfo