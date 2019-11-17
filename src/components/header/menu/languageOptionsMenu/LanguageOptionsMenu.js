//Library Imports
import React from 'react'
import styled from 'styled-components'
//Style Imports
import * as sharedStyles from '../../../../data/sharedStyles'



//Styles
const LanguageContainerStyle = styled.div`
    position: absolute;
    color: ${sharedStyles.unikoWhite};
    font-family: "PlayfairDisplay-Regular";
    font-size: 18px;
    text-align: center;
    top: ${sharedStyles.h100px};
    left: 50vw;
    transform: translateX(-50%);
`
const LanguageLinkStyle = styled.a`
    text-decoration: none;
    color: ${sharedStyles.unikoWhite};
    opacity: ${props => props.active ? "1" : "0.5"};
    transition: 0.4s;
    &:hover{
        opacity: 1;
    }
`

//Main Component
function LanguageOptionsMenu(props){
    return (
        <LanguageContainerStyle ref={ props.refLanguages }>
            <LanguageLinkStyle href={"#es"} active >ES</LanguageLinkStyle>{" "}|{" "}<LanguageLinkStyle href={"#en"}>EN</LanguageLinkStyle>
        </LanguageContainerStyle>
    )
}


//Exports
export default LanguageOptionsMenu
