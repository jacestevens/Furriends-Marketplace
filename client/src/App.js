import './App.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import {Route, Routes} from 'react-router-dom'
import Collections from './view/Collections';
// import AllProducts from './components/AllProducts';
import {useState} from "react"
import OneProduct from './components/OneProduct';
import ErrorPage from './view/ErrorPage';
import Admin from './admin/Admin';
import NewProduct from './admin/NewProduct'
// import DeleteButton from './admin/EditProduct'
import EditProduct from './admin/EditProduct'
import Login from './components/Login';
import Register from './components/Register';
import { GlobalContext } from './contexts/GlobalContext';
import AdminProducts from './admin/AdminProducts';
import UserProfiles from './view/UserProfiles';
import Footer from './components/Footer';


function App() {


  const [productList, setProductList] = useState([])
  const [userId, setuserId] = useState("")
  const [userInfo, setuserInfo] = useState("")
  const [userProducts, setUserProducts] = useState([])
  const [profileInfo, setProfileInfo] = useState([])
  

  return ( 
    <div > 
      <GlobalContext.Provider value={{productList, setProductList, userId, setuserId, userInfo, setuserInfo, userProducts, setUserProducts, profileInfo, setProfileInfo }}>
        <Navigation />
        <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/Collections/*" element={<Collections />}>
                  </Route>
                  <Route path="/Product/:id" element={<OneProduct />}/>
                  <Route path="*" element={<ErrorPage />} />
                  <Route path='/admin' element={<Admin />}>
                    <Route path="add-product" element={<NewProduct />}/>
                    <Route path="edit-product/:id" element={<EditProduct />}/>
                  </Route>
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/user/:id" element={<UserProfiles />}/>
        </Routes>
        <Footer />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
