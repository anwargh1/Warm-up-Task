import React from 'react'
import DisplayMember from '../DisplayMember/DisplayMember'
import './teams.css'

function Teams() {
  const teamData = [
    {
      name: "Karam Shawish",
      checked:false

    },
    {
      name: "Anwar Ghannam",
      checked:true

    },
    {
      name: "Amin Nassar",
      checked:false

    },
    {
      name: "Ali Ahmad",
      checked:false

    },
    {
      name: "Muhaimen",
      checked:true

    },
    {
      name: "Murad Dweikat",
      checked:true
    }
]

  return (
    <div className='display-members'>
      {teamData.map(data => <DisplayMember name={data.name} checked={data.checked}/>)}
    </div>
  )
}

export default Teams