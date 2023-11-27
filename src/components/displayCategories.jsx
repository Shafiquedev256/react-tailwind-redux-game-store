import {Header} from "./header"
import {Waiting} from './waitingApi'
import {useDispatch,useSelector} from 'react-redux'
import {useState,useEffect}from "react"
export const Display_category = ({category})=>{
  const [games,setGames] =useState([])
const Action = useSelector((state)=>{ return state.thunk.action})
const Race = useSelector((state)=>{ return state.thunk.race})
const Sports = useSelector((state)=>{ return state.thunk.sports})
const Adventure = useSelector((state)=>{ return state.thunk.action})
useEffect(()=>{
  if(category=="Action"){
    setGames(Action)
  }
  if(category=="Race"){
    setGames(Race)
  }
  if(category=="Sports"){
    setGames(Sports)
  }
  if(category=="Adventure"){
    setGames(Adventure)
  }
  
},[])
  return(
    <>
<div class={`bg-gray-200 pt-2 relative`}>
<Header/>
<div class="md:h-4 h-6 w-[100%] mb-2"></div>
<div class="">
<div class=" md:grid md:grid-cols-2 md:gap-1">
{
 games.length === 0 ?<Waiting/>:games.map(game=>{
    return(
   <div class="flex flex-row  bg-white m-2 w-72 p-1 rounded shadowEl shadow-sm shadow-[rgba(70, 255, 26, .05)]" onClick={(e)=>{
    navigate(`/details/${game.title}`)
  }}>
  <img src={game.img} alt="" class={`rounded max-w-[120px]`}/>
  <div class="ml-2 flex flex-col justify-around">
    <div class="text-sm font-bold">{game.title}</div>
    <div class="text-xs ">{game.cost}</div>
    <div class="text-xs ">{game.platform}</div>
  </div>
  </div>
    )
  })
  
}
</div>
</div>
</div>
   </>
    )
}