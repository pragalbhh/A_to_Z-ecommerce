import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import NoPage from "./pages/nopage/NoPage";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Cart from "./pages/cart/Cart";
import MyState from "./context/data/myState";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import ProductInfo from "./pages/productInfo/ProductInfo";
import AddProduct from "./pages/admin/pages/AddProduct";
import UpdateProduct from "./pages/admin/pages/UpdateProduct";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <MyState>
        <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={
          <ProtectedRoute>
            <Order />
          </ProtectedRoute>
        } />
        <Route path="/dashboard" element={
          <ProtectedRouteForAdmin>
            <Dashboard />
          </ProtectedRouteForAdmin>
        } />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/login" element={< Login/>} />
        <Route path="/addProduct" element={
          <ProtectedRouteForAdmin>
            <AddProduct/>
          </ProtectedRouteForAdmin>
        }/>
        <Route path="/updateProduct" element={
          <ProtectedRouteForAdmin>
            <UpdateProduct/>
          </ProtectedRouteForAdmin>
        }/>
        <Route path="/signup" element={<Signup />} />
        <Route path='/productinfo/:id' element={<ProductInfo />} />
        <Route path="/*" element={<NoPage />} />
        
      </Routes>
      <ToastContainer/>
    </Router>
    </MyState>
    
  );
}

export default App;

export const ProtectedRoute = ({children}) =>{
  const user = localStorage.getItem('user')
  if(user){
    return children
  }
  else{
    return <Navigate to={'/login'}/>
  }
}
// admin
const ProtectedRouteForAdmin =({children})=>{
  const admin = JSON.parse(localStorage.getItem('user'))
  if(admin.user.email==='agrimgupta26703@gmail.com'){
    return children;
  }
  else 
  {
    return <Navigate to ={'/login'}/>
  }
  
}