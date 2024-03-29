import React from 'react'
import '@styles/CreateAccount.scss'

const CreateAccount = () => {
  return (
    <>
      <div className="CreateAccount">
        <div className="CreateAccount-container">
          <h1 className="title">My account</h1>
          <form action="/" className="form">
            <div>
              <label htmlFor="name" className="label">Name</label>
              <input type="text" id="name" placeholder="Name" className="input input-name" />
              <label htmlFor="email" className="label">Email</label>
              <input type="text" id="email" placeholder="user@example.com" className="input input-password" />
              <label htmlFor="password" className="label">Password</label>
              <input type="password" id="password" placeholder="*********" className="input input-password" />
            </div>
            <input type="submit" defaultValue="Create account" className="primary-button login-button" />
          </form>
        </div>
      </div>
    </>
  )
}

export default CreateAccount