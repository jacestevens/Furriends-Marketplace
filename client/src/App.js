import './App.css';
// Pages
import Home from './pages/Home';
import Collections from './pages/Collections';
import OneProduct from './pages/Product-Page';
import ErrorPage from './pages/ErrorPage';
import Admin from './admin/Admin';
import UserProfiles from './pages/UserProfiles';
// Settings & StateManagements
import {Route, Routes} from 'react-router-dom'
import {useState, useEffect} from "react"
import { GlobalContext } from './contexts/GlobalContext';
import { ThemeProvider } from '@emotion/react';
import {theme} from './theme/MainTheme'
// Components
import NewProduct from './admin/NewProduct'
import EditProduct from './admin/EditProduct'
import Login from './components/Login';
import Register from './components/Register';
import Footer from './layouts/Footer';
import Navigation from './layouts/Navigation';
import ProductCategory from './components/ProductCategory';
import Cart from './components/Cart';




function App() {


  const [productList, setProductList] = useState([])
  const [userId, setuserId] = useState("")
  const [userInfo, setuserInfo] = useState("")
  const [userProducts, setUserProducts] = useState([])
  const [profileInfo, setProfileInfo] = useState([])
  const cartItems = JSON.parse(localStorage.getItem("cart") || '[]')
  const [cart, setCart] = useState(cartItems)
  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  , [cart])

  return ( 
    <div > 
      <GlobalContext.Provider value={{productList, setProductList, userId, setuserId, userInfo, setuserInfo, userProducts, setUserProducts, profileInfo, setProfileInfo, cart, setCart }}>
        <ThemeProvider theme={theme}>
        <Navigation />
        <Routes>
                  <Route path="/" element={<Home/>} />
                    <Route path="/Collections/*" element={<Collections />}>
                  </Route>
                  <Route path="/Products/:productType" element={<ProductCategory />}/>
                  <Route path="/Product/:id" element={<OneProduct />}/>
                  <Route path="*" element={<ErrorPage />} />
                  <Route path='/admin' element={<Admin />}>
                    <Route path="add-product" element={<NewProduct />}/>
                    <Route path="edit-product/:id" element={<EditProduct />}/>
                  </Route>
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/user/:id" element={<UserProfiles />}/>
                  <Route path="/cart" element={<Cart />}/>
        </Routes>
        <Footer />
        </ThemeProvider>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
