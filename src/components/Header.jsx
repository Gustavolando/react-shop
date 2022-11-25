import React, { useState, useContext, useRef } from 'react'
import '@styles/Header.scss'
import Menu from '@components/Menu'
import MyOrder from '@containers/MyOrder'
import menu from '@icons/icon_menu.svg'
import logo from '@logos/logo_yard_sale.svg'
import AppContext from '@context/AppContext'
import shoppingCart from '@icons/icon_shopping_cart.svg'

const Header = () => {
  const [toggle, setToggle] = useState(false)
  const [toggleOrders, setToggleOrders] = useState(false)
  const { state } = useContext(AppContext)

  const handleToggle = () => {
    setToggle(!toggle)
    // setToggleOrders(false)
  }

  const handleToggleOrders = () => {
    setToggleOrders(!toggleOrders)
    // setToggle(false)
  }

  const mainMenu = useRef(null)
  const asideMyOrder = useRef(null)
  const closeOpenMenus = (e)=>{
    if (mainMenu.current && toggle && !mainMenu.current.contains(e.target)) {
      setToggle(false)
    }
    const navbarEmail = document.querySelector(".navbar-email")
    if (asideMyOrder.current && toggleOrders && !asideMyOrder.current.contains(e.target) && e.target != navbarEmail) {
      setToggleOrders(false)
    }
  }
  document.addEventListener('mousedown',closeOpenMenus)
  
  return (
    <nav>
      <img src={menu} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Cloth</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furniture</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            user@example.com
          </li>
          <li 
            className="navbar-shopping-cart" 
            onClick={handleToggleOrders}
          >
            <img src={shoppingCart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      <div className="menu-container" ref={mainMenu}>
        {toggle && <Menu />}
      </div>
      <div className="my-order-container" ref={asideMyOrder}>
        {toggleOrders && <MyOrder />}
      </div>
    </nav>
  )
}

export default Header