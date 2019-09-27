//Library Imports
import React, {Component} from 'react'
//Component Imports
import Logo from './logo/Logo'
import Menu from './menu/Menu'
import Searchbar from './searchbar/Searchbar'



//Main Component
class Header extends Component {

  

  render(){
    return (
      <header>
          <Logo logoToggle={this.props.logoToggle} />
          <Searchbar />
          <Menu menuLogoToggleHandler={this.props.menuLogoToggleHandler}/>
      </header>
    );
  }
}


//Exports
export default Header;
