import React, { useState } from 'react'
import dataa from "../../data"
import PlayerCard from "../playerCard/PlayerCard";

const CardContainer = () => {
  // console.log(dataa);
  const [result, setResult] = useState("")
  return (
    <div >
      <div style={{textAlign:"center"}}>
      <form>
        <input  type="text" placeholder='Search Player...' 
          onChange={(e)=>setResult(e.target.value)}
        />
      </form>  
      </div>

      <div className="CardContainer">
     {dataa.filter((item)=>item.name.toLocaleLowerCase().includes(result.toLocaleLowerCase())).map((image, index)=> (
      <PlayerCard key={index} {...image}/>)
    )}   
      </div>
      
    

    </div>
  )
}

export default CardContainer