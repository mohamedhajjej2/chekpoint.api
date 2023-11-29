import React, { useState } from 'react'
import Cardd from './Cardd'

function Userlist({users}) {
  const [text, settext] = useState("")
  return (
    <div>
      
     <input placeholder="Search" type='text'onChange={(e)=>settext(e.target.value)} />
     <div className='title'>
     <h1>Contact</h1>
     </div>
{users.filter((el)=>el.name.toLowerCase().includes(text.toLowerCase())).map((el)=><Cardd el={el}/>)}
    </div>
  )
}

export default Userlist