import React from 'react'
import "@styles/NotFound.scss"

const NotFound = () => {
  return (
    <div className='NotFoundContainer'>
      <div id="clouds">
        <div className="cloud x1" />
        <div className="cloud x1_5" />
        <div className="cloud x2" />
        <div className="cloud x3" />
        <div className="cloud x4" />
        <div className="cloud x5" />
      </div>
      <div className="c">
        <div className="_404">404</div>
        <hr />
        <div className="_1">LA PAGINA</div>
        <div className="_2">NO SE ENCONTRO</div>
        <a className="btn" href="#">VOLVER A LA PRINCIPAL</a>
      </div>
    </div>
  )
}

export default NotFound