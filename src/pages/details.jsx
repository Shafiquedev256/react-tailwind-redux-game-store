import ReactPlayer from 'react-player'
import {Header2} from "../components/header2"
import {useState} from 'react';


export const Details = ({detailsEl}) => {
const [cart, setCart] = useState([]);

const addToCart = () => {
  try {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const newDetailsEl = {...detailsEl,count:1}
    const updatedCart = [...existingCart, newDetailsEl];
    
 const newCart = updatedCart.filter(item=>item.count>0)
    
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);
    alert("Item added to cart!");
  } catch (err) {
    alert(err.message);
  }
};



  return (
<>
<Header2/>
  <div class="container mx-auto text-gray-600 py-8">
    <div class="bg-white rounded-lg shadow-lg p-8">
      <h1 class="text-3xl font-semibold mb-4">{detailsEl.title}</h1>

      <div class="mb-6">
        <img src={detailsEl.img}  alt="" class="rounded-lg"/>
      </div>

      <div class="md:flex md:justify-between mb-4">
        <div>
          <p class="text-gray-600">Release Date:<span class="font-semibold">{detailsEl.release}</span></p>
          <p class="font-semibold"></p>
        </div>
        <div>
        <div class="text-gray-600">
        Publisher: <span class="font-semibold">{detailsEl.publisher}</span>
        </div>
        
          <div class="text-gray-600">Platform:<span class="font-semibold">{detailsEl.platform}</span></div>
        </div>
      </div>

      <div class="mb-4">
        <p class="text-gray-600 mb-2">Description</p>
        <p>{detailsEl.description}</p>
      </div>
    <button class="btn w-64 p-3 mt-3 " onClick={addToCart}>+CART</button>
    <div class="w-20">
   <span class="font-bold"> trailers</span>
<ReactPlayer url={detailsEl.trailer} controls width="266px"/>
    </div>
    </div>
  </div>
</>
  );

};