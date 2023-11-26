import {Link} from "react-router-dom"
export const Header2 = ()=>{
  
  return(
    <>
    <section class="flex flex-row items-center bg-white p-3 justify-between ">
    <Link to="/" class="font-bold text-[#6CBC02]">affinity games</Link>
    <Link to="/cart"><img src="/public/cart-shopping-fast-svgrepo-com.svg"/></Link>
    </section>
    </>
    )
}