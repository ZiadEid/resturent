import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import PlaceOrder from './pages/PlaceOrder';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const App = () => {

  const [showLogin, setShowLogin] = useState(false);
  const [currState, setCurrState] = useState('Sign In')

  return (
    <div className='App'>
      <BrowserRouter>
        {showLogin ?
          currState == 'Sign In' ?
            <SignIn setShowLogin={setShowLogin} currState={currState} setCurrState={setCurrState} />
            :
            <SignUp setShowLogin={setShowLogin} currState={currState} setCurrState={setCurrState} />
          : ''}
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='cart' element={<Cart />} />
            <Route path='order' element={<PlaceOrder />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App