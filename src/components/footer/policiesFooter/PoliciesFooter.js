//Library Imports
import React from 'react'
// import { Link } from "react-router-dom"
import styled from 'styled-components'
//Style Imports
import * as sharedStyles from '../../../data/sharedStyles'

//Styles
const PoliciesFooterContainerStyle = styled.div`
    position: absolute;
    width: 31.25vw;
    height: 20px;
    bottom: 5px;
    left: 0px;
    color: ${sharedStyles.unikoWhite};
`
const PoliciesLinkStyle = styled.a`
    text-decoration: none;
    color: ${sharedStyles.unikoWhite};
    font-family: "PlayfairDisplay-Regular";
    font-size: 14px;
    line-height: 20px;
    transition: 0.4s;
    opacity: 0.5;
    &:hover{
        opacity: 1;
    }
`

//Main Component
function PoliciesFooter() {
    return (
        <PoliciesFooterContainerStyle>
            <PoliciesLinkStyle href={"#avisolegal"}>Aviso Legal</PoliciesLinkStyle> | <PoliciesLinkStyle href={"#politicaprivacidad"}>Política de Privacidad</PoliciesLinkStyle> | <PoliciesLinkStyle href={"#politicacookies"}>Política de Cookies</PoliciesLinkStyle>
        </PoliciesFooterContainerStyle>
    );
}

//Export
export default PoliciesFooter;