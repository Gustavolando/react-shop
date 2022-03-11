import React from 'react'
import '../styles/RecoveryPassword.scss'

function RecoveyPassword() {
  return (
    <div className="RecoveyPassword">
      <div className="RecoveyPassword-container">
        <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
        <h1 className="title">Password Recovery</h1>
        <p className="subtitle">Inform the email address used to create your account</p>
        <form action="/" className="form">
          <label htmlFor="email" className="label">Email address</label>
          <input type="text" id="email" placeholder="user@example.com" className="input input-email" />
          <input type="submit" defaultValue="Submit" className="primary-button submit-button" />
          <a href="/">Back to log in</a>
        </form>
      </div>
    </div>
  )
}

export default RecoveyPassword