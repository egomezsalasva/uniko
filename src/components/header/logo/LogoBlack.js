//Library Imports
import React from 'react'
import styled from 'styled-components'
//Style Imports
import * as sharedStyles from '../../../data/sharedStyles'
//Image Imports
import logoBlack from '../../../assets/logos&icons/logoBlack.svg'


//Styles
const LogoStyle = styled.img`
    position: fixed;
    left: ${sharedStyles.w40px};
    top: ${sharedStyles.h30px};
    z-index: ${sharedStyles.zLogo};
`

//Main Component
function LogoBlack(props) {
  return (
    <React.Fragment>
      <LogoStyle src={logoBlack} />
    </React.Fragment>
  );
}


//Exports
export default LogoBlack;
