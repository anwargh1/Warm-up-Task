import React from 'react'
import {BsFillPersonFill} from 'react-icons/bs'
import './memberItem.css'

function MemberItem({name }) {
  return (
    <div  className = 'member-item'>
            <label><BsFillPersonFill className='member-item-icon'/>  {name}</label> 
            <input className='checkbox-input' type='checkbox'  value={name} />
    </div>
   
  )
}

export default MemberItem