import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home_page/home_page'
import ShopPage from './pages/shop_page/shop_page'
import "./App.css"

function App() {


  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/shop" element={<ShopPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
