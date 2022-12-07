import React, { useState, useContext, useRef } from 'react'
import '@styles/Header.scss'
import Menu from '@components/Menu'
import MyOrder from '@containers/MyOrder'
import MenuMobile from '@containers/MenuMobile'
import menu from '@icons/icon_menu.svg'
import logo from '@logos/logo_yard_sale.svg'
import AppContext from '@context/AppContext'
import shoppingCart from '@icons/icon_shopping_cart.svg'

const Header = ( {layoutClick} ) => {
  const [toggle, setToggle] = useState(false)
  const [toggleOrders, setToggleOrders] = useState(false)
  const [toggleMenuMobile, setToggleMenuMobile] = useState(false)
  const { state } = useContext(AppContext)

  const handleToggle = () => {
    console.log('handleToggle toggle ', toggle);
    setToggle(!toggle)
  }

  const handleToggleOrders = () => {
    console.log('handleToggleOrders toggleOrders ', toggleOrders);
    setToggleOrders(!toggleOrders)
  }
  
  const handleToggleMenuMobile = () => {
    console.log('handleToggleMenuMobile toggleMenuMobile ', toggleMenuMobile);
    setToggleMenuMobile(!toggleMenuMobile)
  }

  const menuUser = useRef(null)
  const navbarEmail = useRef(null)
  const asideMyOrder = useRef(null)
  const navbarShoppingCart = useRef(null)
  const iconMenuMobile = useRef(null)
  const menuMobile = useRef(null)
  const closeOpenMenus = (e)=>{
    if (menuUser.current && toggle && !navbarEmail.current.contains(layoutClick) && !menuUser.current.contains(layoutClick)) {
      setToggle(false)
    }
    if (asideMyOrder.current && toggleOrders && !navbarShoppingCart.current.contains(layoutClick) && !navbarEmail.current.contains(layoutClick) && !asideMyOrder.current.contains(layoutClick)) {
      setToggleOrders(false)
    }
    if (menuMobile.current && toggleMenuMobile && !menuMobile.current.contains(layoutClick) && !iconMenuMobile.current.contains(layoutClick)) {
      setToggleMenuMobile(false)
    }
  }

  if (layoutClick) {
    closeOpenMenus()
  }
  
  return (
    <nav className='navvar-container'>
      <img src={menu} alt="menu" className="menu" onClick={handleToggleMenuMobile} ref={iconMenuMobile} />
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
          <li 
            className="navbar-email" 
            onClick={handleToggle} 
            ref={navbarEmail}
          >
            user@example.com
          </li>
          <li 
            className="navbar-shopping-cart" 
            onClick={handleToggleOrders}
            ref={navbarShoppingCart}
          >
            <img src={shoppingCart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      <div className="menu-container" ref={menuUser}>
        {toggle && <Menu />}
      </div>
      <div className="my-order-container" ref={asideMyOrder}>
        {toggleOrders && <MyOrder onCerrar = {() => setToggleOrders(false)} />}
      </div>
      <div className="mobile-menu-container" ref={menuMobile}>
        {toggleMenuMobile && <MenuMobile onCerrar = {() => setToggleMenuMobile(false)} />}
      </div>
    </nav>
  )
}

export default Header