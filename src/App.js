import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

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
          <Switch>
            <Route path={"/orderhistory"}> <OrderHistory click={() => setShowCart(true)} /> </Route>
            <Route path={"/profile"}> <Profile click={() => setShowCart(true)} /> </Route>
            <Route path={"/baskets"}> <Baskets click={() => setShowCart(true)} /> </Route>
            <Route path={"/"}> <Redirect from="/" to="/baskets" /> </Route>
          </Switch>
        </main>

        <Stats />
        <Cart click={() => setShowCart(false)} showCart={showCart} />
      </div>
    </Router>
  )
}

export default App;
