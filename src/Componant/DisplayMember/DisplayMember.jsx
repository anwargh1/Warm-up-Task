import React from 'react'
import {BsFillPersonFill} from 'react-icons/bs'
import './displayMember.css'

function DisplayMember({name ,checked}) {
  return (
    <div  className ={checked ? 'member-checked':"member-notChecked"}>
            <label><BsFillPersonFill/>  {name}</label> 
            <input className='checkbox-input' type='checkbox' checked={checked} value={name} />
    </div>
   
  )
}

export default DisplayMember