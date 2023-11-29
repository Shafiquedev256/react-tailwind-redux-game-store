import {Link} from "react-router-dom"
export const Header2 = ()=>{
  
  return(
    <>
    <section class="flex flex-row items-center bg-white p-3 justify-between  sticky top-0 shadowEl shadow-[rgba(0, 0, 0, .2)] z-10">
    <Link to="/" class="font-bold text-[#6CBC02]">affinity games</Link>
    <Link to="/cart"><img src="/dist/cart-shopping-fast-svgrepo-com.svg"/></Link>
    </section>
    </>
    )
}