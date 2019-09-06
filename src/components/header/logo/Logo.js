//Library Imports
import React from 'react'
import styled from 'styled-components'
//Style Imports
import * as sharedStyles from '../../../data/sharedStyles'
//Image Imports
import logoImage from '../../../assets/logos&icons/logoUniko.svg'
import logoImageBorder from '../../../assets/logos&icons/logoUnikoBorder.svg'


//Styles
const LogoStyle = styled.img`
    position: absolute;
    left: ${sharedStyles.w40px};
    top: ${sharedStyles.h30px};
    z-index: 1600;
`

//Main Component
function Logo(props) {
  return (
    <React.Fragment>
      { props.logoToggle ? <LogoStyle src={logoImage} /> : <LogoStyle src={logoImageBorder} />}
    </React.Fragment>
  );
}


//Exports
export default Logo;
