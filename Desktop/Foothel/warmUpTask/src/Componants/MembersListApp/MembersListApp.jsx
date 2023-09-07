import React from 'react'
import './membersListApp.css'
import SearchBar from'../SearchBar/SearchBar'
import MembersList from '../MembersList/MembersList'
import Actions from '../Actions/Actions'
function MembersListApp() {
  return (
    <div className='container'>
    <header>
       <h2>Add members to Front-end development team</h2>
    </header>
      <SearchBar/>
      <MembersList/>
      <Actions/>
  </div>
  )
}

export default MembersListApp