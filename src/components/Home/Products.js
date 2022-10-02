import React ,{useState , useEffect, useContext} from 'react'
import './products.css'
import axios from 'axios'
import { ProductContext } from '../context/Context'


const Products = () => {
const {selectedMode, setSelectedMode} =useContext(ProductContext);
  const items = [];
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(
      'https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json'
    ).then((response) => {
      console.log(response.data);
      for (const dataItem in response.data) {
        items.push({
          id: response.data[dataItem].id,
          newprice: response.data[dataItem].newPrice,
          oldprice: response.data[dataItem].oldPrice,
          productimage: response.data[dataItem].productImage,
          productname: response.data[dataItem].productName
        });
        console.log(items)
        setProducts(items);
      }
    });
  },[]);
  


  return (
   <div className='whole'>
 
   
    {
      products && ( products.map((item)=>(

      <div className='product-item'>
        <div className='product-image'>
           <img className='product-img' src={item.productimage}/>
        </div>
        <div className='bottom-items'>
          <h3 className='productname'>{item.productname}</h3>
          <div className='price'>
            <div className='stars'>
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B"/>
</svg>
<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B"/>
</svg>
<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B"/>
</svg>
<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B"/>
</svg>
<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B"/>
</svg>


            </div>
            <div className='price-numbers'>
              <h3 className='oldprice'>{item.oldprice}/-</h3>
              <h3 className='newprice'>{item.newprice}/-</h3>
            </div>
          </div>
          <button onClick={()=>setSelectedMode(selectedMode+1)} className='product-btn'><span className='product-btntext'>ADD TO CART</span></button>
        </div>
      </div>
      )))
    }
    </div>
  )
}

export default Products