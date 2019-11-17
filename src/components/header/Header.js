//Library Imports
import React from 'react'
//Component Imports
import Menu from './menu/Menu'
import Searchbar from './searchbar/Searchbar'

//Main Component
function Header(){
    return (
      <header>
          <Searchbar />
          <Menu/>
      </header>
    )
}

//Exports
export default Header;
