

//Library Imports
import React from 'react'
import styled from 'styled-components'
//Style Imports
import * as sharedStyles from '../../../../data/sharedStyles'


//Styles
const HamburgerMenuStyle = styled.div`
    position: fixed;
    top: ${sharedStyles.h30px};
    right: ${sharedStyles.w40px};
    background: ${sharedStyles.unikoBlack};
    width: 42px;
    height: 40px;
    z-index: ${sharedStyles.zHamburgerMenuBox};
    cursor: pointer;
`
const LineContainerStyle = styled.div`
    position: absolute;
    left: 10px;
    top: 12px;
`
const LineStyle = styled.div`
    background: ${sharedStyles.unikoWhite};
    width: 22px;
    height: 2px;
`
const Line01Style = styled(LineStyle)`
    position: absolute;
    top: 0;
    left: 0;
`
const Line02Style = styled(LineStyle)`
    position: absolute;
    top: 7px;
    left: 0;
`
const Line03Style = styled(LineStyle)`
    position: absolute;
    top: 14px;
    left: 0;
`
const HamburgerMenuShadowStyle = styled.div`
    position: absolute;
    top: 4.28571429vh;
    right: ${sharedStyles.w40px};
    background: ${sharedStyles.unikoBlack};
    width: 42px;
    height: 40px;
    z-index: ${sharedStyles.zHamburgerShadow};
    display: none;
`



//Main Component
function HamburgerBoxMenu(props){
    return (
        <>
        <HamburgerMenuStyle onClick={ props.onClickProp }>
            <LineContainerStyle>
                <Line01Style ref={ props.refLineOne }  />
                <Line02Style ref={ props.refLineTwo } />
                <Line03Style ref={ props.refLineThree } />
            </LineContainerStyle>
        </HamburgerMenuStyle>
        <HamburgerMenuShadowStyle ref={ props.refMenuShadow } />
        </>
    )
}


//Exports
export default HamburgerBoxMenu
