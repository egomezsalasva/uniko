//Library Imports
import React from 'react'
import styled from 'styled-components'
//Style Imports
import * as sharedStyles from '../../data/sharedStyles'

//Styles
const FooterFrameStyle = styled.div`
    position: fixed;
    background: ${sharedStyles.unikoGrey};
    width: 100vw;
    height: 50px;
    left: 0;
    bottom: 0;
    z-index: ${sharedStyles.zSubmenuModelsBg};
`

//Main Component
function FooterFrame() {
    return (
        <>
        <FooterFrameStyle />
        </>
    );
}


//Export
export default FooterFrame;