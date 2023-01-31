import React from 'react'
import Navbar from "../navbar2/Navbar2"
import Search from "../search/Search"
import Chats from "../chats/Chats"

const Sidebar = () => {
  return (
    <div className="sidebar2">
      <Navbar />
      <Search/>
      <Chats/>
    </div>
  )
}

export default Sidebar