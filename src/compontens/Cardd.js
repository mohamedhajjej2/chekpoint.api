import React from 'react'

function Cardd({el}) {
  return (
    <div className='card'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNraN4A6Oit-NcuGjEW3TNSSsoT2vO0JDUaAv-YaGCSA&s' />
        <h1>{el.name}</h1>
        <form className='formation'>
  <select className='but'>
    <option>{el.phone}</option>
    <option>{el.email}</option>
    <option>{el.city}</option>
    <option>{el.geo}</option>
  </select>
</form>
    </div>
  )
}

export default Cardd