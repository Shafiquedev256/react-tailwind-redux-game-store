import {Link} from "react-router-dom"
import icon_cart from "../assets/cart-shopping-fast-svgrepo-com.svg"
export const Header2 = ()=>{
  
  return(
    <>
    <section class="flex flex-row items-center bg-white p-3 justify-between  sticky top-0 shadowEl shadow-[rgba(0, 0, 0, .2)] z-10">
    <Link to="/" class="font-bold text-[#6CBC02]">Shafiq games</Link>
    <Link to="/cart"><img src={icon_cart}/></Link>
    </section>
    </>
    )
}