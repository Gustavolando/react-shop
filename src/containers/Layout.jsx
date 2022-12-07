import React, {useState} from 'react'
import Header from '@components/Header'

const Layout = ({ children }) => {
  const [domClick, setDomClick] = useState(false)
  const handleDomClick = (e) => {
    setDomClick(e.target)
  }
  return (
    <div onClick={handleDomClick} className="Layout">
      <Header layoutClick = { domClick } />
      { children }
    </div>
  )
}

export default Layout