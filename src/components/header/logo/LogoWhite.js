//Library Imports
import React from 'react'
import styled from 'styled-components'
//Style Imports
import * as sharedStyles from '../../../data/sharedStyles'
//Image Imports
import logoWhite from '../../../assets/logos&icons/logoWhite.svg'


//Styles
const LogoStyle = styled.img`
    position: fixed;
    left: ${sharedStyles.w40px};
    top: ${sharedStyles.h30px};
    z-index: ${sharedStyles.zLogo};
`

//Main Component
function LogoWhite() {
  return (
    <>
    <LogoStyle src={logoWhite} />
    </>
  )
}


//Exports
export default LogoWhite;
