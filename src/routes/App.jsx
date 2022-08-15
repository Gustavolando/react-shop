import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@containers/Layout';
import RecoveyPassword from '@pages/RecoveyPassword';
import Login from '@pages/Login';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import MyAccount from '@pages/MyAccount';
import Orders from '@pages/Orders';
import Checkout from '@pages/Checkout';
import SendEmail from '@pages/SendEmail';
import CreateAccount from '@pages/CreateAccount';
import NewPassword from '@pages/NewPassword';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import '@styles/global.css'

const App = () => {
  const initialState = useInitialState()
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/recovery-password' element={<RecoveyPassword />} />
            <Route exact path='/send-email' element={<SendEmail />} />
            <Route exact path='/new-password' element={<NewPassword />} />
            <Route exact path='/my-account' element={<MyAccount />} />
            <Route exact path='/create-account' element={<CreateAccount />} />
            <Route exact path='/checkout' element={<Checkout />} />
            <Route exact path='/my-orders' element={<Orders />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;