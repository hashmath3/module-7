
import './App.css';
import Header from './components/Layouts/Header';
import Footer from './components/Layouts/Footer';
import Displayimage from './components/Home/Displayimage';
import ProductsTitle from './components/Home/ProductsTitle';
import Products from './components/Home/Products';
import { useState, createContext, useContext } from "react";
import {ProductContext} from "./components/context/Context"



function App() {
  const [selectedMode, setSelectedMode] = useState(0);
  return (
    
    <ProductContext.Provider value={{selectedMode, setSelectedMode}}>
  
    <div className='maincontainer'>
     <Header />  
     <div className='second'> <Displayimage/> 
    <ProductsTitle/></div>
   
    <div className='mainproducts'>  
      <Products /> </div>
   
    <Footer/>  
    
    </div>
    
  
    </ProductContext.Provider>
  );
}

export default App;
