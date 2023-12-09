import {useEffect,useState} from "react"
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

import {addGames} from '../redux/slice'
import {Waiting} from './waitingApi'
  
const API_url = "https://gamesapi-8lyv.onrender.com"

const options = {
  method:'GET',
  headers:{
      "Content-type": "application/json",
     'que-Key': '0784307854game0760807822',
           
  }
}

export const Categorized = ({endpoint, bg,category,img_w})=>{
const dispatch = useDispatch()
  const [categories,setCategories] = useState([])
const navigate = useNavigate()
  useEffect(()=>{
fetch(API_url)
.then(data=> data.json()
)
.then(res=>{
  setCategories(res)
  if(endpoint == " "){
    dispatch(addGames(res))
  }
}).catch(err=>{
})

  },[])
  
  return(
    <>
<div class={`${bg} pt-2 relative`}>
<div class="text-white bg-red-600 p-1 absolute top-0 w-[100%] mb-2">{category}</div>
<div class="md:h-4 h-6 w-[100%] mb-2"></div>
<div class="">
<div class=" md:grid md:grid-cols-2 md:gap-1">
{
 categories.length === 0 ?<Waiting/>:categories.map(game=>{
    return(
   <div class="flex flex-row  bg-white m-2 w-72 p-1 rounded shadowEl shadow-sm shadow-[rgba(70, 255, 26, .05)]" onClick={(e)=>{
    navigate(`/details/${game.title}`)
  }}>
  <img src={game.img} alt="" class={`rounded ${img_w}`}/>
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