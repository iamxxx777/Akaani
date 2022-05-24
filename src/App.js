import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

// Components
import Cart from './components/Cart/Cart'
import SideNav from './components/SideNav/SideNav'
import Stats from './components/Stats/Stats'

// Pages
import Baskets from './screens/Baskets/Baskets'
import OrderHistory from './screens/OrderHistory/OrderHistory'
import Profile from './screens/Profile/Profile'

import './App.scss';

function App() {

  const [showCart, setShowCart] = useState(false)

  return (
    <Router>
      <div className="App">
        <SideNav />

        <main className="main">
          <Routes>
            <Route path="/" render={() => <Navigate to="baskets" replace={true} />} />
            <Route path="orderhistory" element={<OrderHistory click={() => setShowCart(true)} />} />
            <Route path="profile" element={<Profile click={() => setShowCart(true)} />} />
            <Route path="baskets" element={<Baskets click={() => setShowCart(true)} />} />
          </Routes>
        </main>

        <Stats />
        <Cart click={() => setShowCart(false)} showCart={showCart} />
      </div>
    </Router>
  )
}

export default App;
