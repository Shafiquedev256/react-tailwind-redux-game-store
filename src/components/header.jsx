import {Link}from "react-router-dom"
export const Header = ()=>{
  return(
    <>
    
    <nav>
   <div class="p-[0.8rem] flex items-center justify-center text-white font-bold bg-[#6CBC02] w-screen">
     <div><span>Fque </span> Games</div>
   </div>
 </nav>
 <section class="pl-[.8rem] bg-white py-[20px] sticky top-0 z-10 flex flex-col md:flex-row ">
   <div class="flex flex-row shadowEl shadow-[rgba(0, 0, 0, .2)] p-[8px] w-[95%] rounded ">
     <input type="text" placeholder="search games & accessories..."class="outline-0"/>
     <button class="btn w-max text-xs p-1">search</button>
     </div>
     <Link to="/cart" class="self-end mr-2 font-bold relative">
     <span class="pt-2">Cart</span>
     <span class="pt-2 absolute top-0 right-0 rounded-full bg-red-500 text-white text-xs">0</span>
     
     </Link>
 </section>
   </>
    )
}