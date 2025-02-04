
import './App.css'
import Navbar from'./components/Navbar'
import Home from'./components/Home'
import Footer from'./components/Footer'
import Shop from './components/Shop'
import Blog from './components/Blog'
import Vendors from "./components/Vendors";
import Contact from './components/Contact'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Layout from './components/Layout'
import LoginForm from './components/loginform'



function App() {
  

  return (
  <BrowserRouter>
  
  <Routes>
 
    <Route path='/' element={<Layout/>}>
    <Route path="/" index element={<Home/>}/>
    <Route path="/shop"element={<Shop/>}/>
    <Route path="/Blog"element={<Blog/>}/>
    <Route path="/Vendors"element={<Vendors/>}/>
    <Route path="/Contact"element={<Contact/>}/>  
    <Route path="/Loginform"element={<LoginForm/>}/>
    </Route>
  
    </Routes>

  </BrowserRouter>

      
  
  );
}

export default App
