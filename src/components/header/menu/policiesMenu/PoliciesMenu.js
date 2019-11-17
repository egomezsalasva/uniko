//Library Imports
import React from 'react'
import styled from 'styled-components'
//Style Imports
import * as sharedStyles from '../../../../data/sharedStyles'


//Styles
const PoliciesContainerStyle = styled.div`
    position: absolute;
    color: ${sharedStyles.unikoWhite};
    font-family: "PlayfairDisplay-Regular";
    font-size: 18px;
    text-align: center;
    bottom: ${sharedStyles.h70px};
    left: 50vw;
    transform: translateX(-50%);
`
const PoliciesLinkStyle = styled.a`
    text-decoration: none;
    color: ${sharedStyles.unikoWhite};
    opacity: 0.5;
    transition: 0.4s;
    &:hover{
        opacity: 1;
    }
`


//Main Component
function PoliciesMenu(props){
    return (
        <PoliciesContainerStyle ref={ props.refPolicies }>
            <PoliciesLinkStyle href={"#avisolegal"}>Aviso Legal</PoliciesLinkStyle>{"  "}|{"  "}
            <PoliciesLinkStyle href={"#politicaprivacidad"}>Política de Privacidad</PoliciesLinkStyle>{" "}|{" "}
            <PoliciesLinkStyle href={"#politicacookies"}>Política de Cookies</PoliciesLinkStyle>
        </PoliciesContainerStyle>
    )
}


//Exports
export default PoliciesMenu
