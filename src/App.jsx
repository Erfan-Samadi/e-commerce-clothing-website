import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { auth, createUserProfileDocument } from "./firebase/firebase.utils.js"
import Header from './components/header/header'
import HomePage from './pages/home_page/home_page'
import ShopPage from './pages/shop_page/shop_page'
import SignInAndSingOut from './pages/sign_in_up/sign_in_up'
import "./App.css"

class App extends React.Component {
    constructor() {
      super()
      
      this.state = {
        currentUser: null

      }
    }

    unsubscribeFromAuth = null

    componentDidMount() {
      this.unsubscribeFromAuth = auth.onAuthStateChanged( async user => { 
        createUserProfileDocument(user)

        console.log(user)
      
      })
        }
    

    componentWillUnmount() {
      this.unsubscribeFromAuth()
    }

    render() {
      return (
        <Router>
          <div className="app">
    
            <Header currentUser={this.state.currentUser} />
    
          
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/shop" element={<ShopPage />} />
                <Route exact path="/signin" element={<SignInAndSingOut />} />
            </Routes>
          </div>
    
        </Router>
      )
    }
}

export default App
