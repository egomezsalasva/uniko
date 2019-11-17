//Library Imports
import React from 'react'
import styled from 'styled-components'
//Style Imports
import * as sharedStyles from '../data/sharedStyles'
//Image Imports
import Icon404 from '../assets/logos&icons/404.svg'
//Component Imports
import LogoBlack from '../components/header/logo/LogoBlack'



//Styles
const container404Style = styled.div`
    background: ${sharedStyles.unikoWhite};
    width: 100vw;
    height: 100vh;
`
const Icon404Style = styled.img`
    position: absolute;
    transform: scale(0.66) translate(-60px, -20px);
`

//Main Component
function FourOFour() {
    return (
        <>
        <LogoBlack />
        <container404Style>
            <Icon404Style src={Icon404} />
        </container404Style>
        </>
    );
}


//Export
export default FourOFour;