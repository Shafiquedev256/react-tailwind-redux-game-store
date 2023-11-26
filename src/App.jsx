import {Routes, Route} from 'react-router-dom'
import {useEffect} from "react"
import {useSelector} from 'react-redux'
import {Home} from "./pages/home"
import {Cart} from  "./pages/cart"
import{Details} from "./pages/details"
function App(){
const gamesQ = useSelector((state)=>{ return state.thunk.entities})
  
  return(<>
 <Routes>
 <Route path="/" element={<Home/>}/>
 <Route path="/cart" element={<Cart/>}/>
    {gamesQ != [] &&
      gamesQ.map((game) =>{ 
      return(
        <Route
          key={game.id} 
          path={`/details/${game.title}`}
          element={<Details detailsEl={game} />}
        />
      )})}
  
 </Routes>


  </>
    )
}

export default App
