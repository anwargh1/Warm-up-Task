import React from 'react'
import './membersList.css'
import MemberItem from '../MemberItem/MemberItem'

function MembersList(){
  const membersData = [
    {
      name: "Karam Shawish",

    },
    {
      name: "Anwar Ghannam",

    },
    {
      name: "Amin Nassar",

    },
    {
      name: "Ali Ahmad",

    },
    {
      name: "Muhaimen",

    },
    {
      name: "Murad Dweikat",
    }
]

  return (
    <div className='members-list'>
      {membersData.map((data,index) => <MemberItem name={data.name} key={index}/>)}
    </div>
  )
}

export default MembersList

