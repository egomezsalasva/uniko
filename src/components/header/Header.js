//Library Imports
import React, {Component} from 'react'
//Component Imports
import Logo from './logo/Logo'
import Menu from './menu/Menu'
import Searchbar from './searchbar/Searchbar'



//Main Component
class Header extends Component {

  constructor(props){
    super(props);
    //State
    this.state = {
        logoToggle: true
    };
  }

  menuToggleHandler = () => {
    this.setState(prevState => ({
      logoToggle: !prevState.logoToggle
    }));
  }

  render(){
    return (
      <header>
          <Logo logoToggle={this.state.logoToggle} menuToggleHandler={this.menuToggleHandler}/>
          <Searchbar />
          <Menu menuToggleHandler={this.menuToggleHandler}/>
      </header>
    );
  }
}


//Exports
export default Header;
