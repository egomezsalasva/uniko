//Library Imports
import React from 'react'
import styled from 'styled-components'
//Style Imports
import * as sharedStyles from '../../../data/sharedStyles'
//Image Imports
import logoWhite from '../../../assets/logos&icons/logoWhite.svg'
import logoWhiteBorder from '../../../assets/logos&icons/logoWhiteBorder.svg'


//Styles
const LogoStyle = styled.img`
    position: fixed;
    left: ${sharedStyles.w40px};
    top: ${sharedStyles.h30px};
    z-index: 1600;
`

//Main Component
function Logo(props) {
  return (
    <React.Fragment>
      { props.logoToggle ? <LogoStyle src={logoWhite} /> : <LogoStyle src={logoWhiteBorder} />}
    </React.Fragment>
  );
}


//Exports
export default Logo;
