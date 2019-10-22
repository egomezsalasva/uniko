//Library Imports
import React, {Component} from 'react'
//Component Imports
import Menu from './menu/Menu'
import Searchbar from './searchbar/Searchbar'



//Main Component
class Header extends Component {

  

  render(){
    return (
      <header>
          <Searchbar />
          <Menu/>
          {/* menuLogoToggleHandler={this.props.menuLogoToggleHandler} */}
      </header>
    );
  }
}


//Exports
export default Header;
