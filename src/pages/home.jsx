import {Discount} from "../components/discount"
import {Header2} from "../components/header2"
import {Footer} from "../components/footer"
import {Category_menu} from "../components/categories"
import {Categorized} from "../components/trending"
export const Home = ()=>{
  return(
    <>
    <section>
    <Header2/>
    <div></div>
   <Discount/>
   <Category_menu/>
   <Categorized endpoint="Popular" bg="bg-[#EAEBFF]" category="Popular" img_w="w-[130px]"/>
   <Categorized endpoint="Race" bg="bg-[#EFFFFA]" category="Race" img_w="max-w-[120px]"/>
   <Categorized endpoint="Action" bg="bg-[#FFF3BC]" category="Action" img_w="max-w-[120px]"/>
   <Categorized endpoint=" " bg="bg-purple-100" category="All" img_w="max-w-[120px]"/>
   <Footer/>
   </section>
   </>
    )
}