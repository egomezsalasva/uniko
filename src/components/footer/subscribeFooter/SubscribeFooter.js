//Library Imports
import React from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'
//Style Imports
import * as sharedStyles from '../../../data/sharedStyles'


//Styles
const SubscribeFooterContainerStyle = styled.div`
    position: absolute;
    width: 35.4166667vw;
    height: 170px;
    top: 0px;
    left: 0px;
`
const SubscribeFooterTitleStyle = styled.h2`
    font-family: "Gotham-Black";
    font-size: 30px;
    color: ${sharedStyles.unikoWhite};
`
const SubscribeTsCsContainerStyle = styled.div`
   padding-top: 20px;
`
const SubscribeTsCsTextStyle = styled.label`
    font-family: "Gotham-Bold";
    font-size: 12px;
    color: ${sharedStyles.unikoWhite};
    line-height: 14px;
    span{
        font-family: "Gotham-Black";
        font-size: 13px;
        color: ${sharedStyles.unikoWhite};
        text-decoration: none;
    }
`
const SubscribeTsCsCheckboxStyle = styled.input`
    position: absolute;
    cursor: pointer;
    opacitiy: 0;
    appearance: none;
    -webkit-appearance: none;
	background-color: transparent;
	border: 2px solid ${sharedStyles.unikoWhite};
	outline: none;
    width: 20px;
    height: 20px;
    left: 20px;
    bottom: -2px;
	display: inline-block;
    position: relative;
    transition: 0.4s;
    &:checked{
        background: ${sharedStyles.unikoWhite};
    }
`
const SubscribeNewsletterCointainerStyle = styled.div`
    position: absolute;
    bottom: 0;
    bottom: 10px;
    width: 100%;
    height: 30px;
`
const SubscribeNewsletterEmailInputStyle = styled.input`
    position: absolute;
    left: 10px;
    bottom: 2px;
    height: 40px;
    width: calc(100% - 90.8px);
    border: none;
    outline: none;
    background: transparent;
    color: ${sharedStyles.unikoWhite};
    font-family: "Gotham-BookItalic";
    font-size: 14px;
`
const SubscribeNewsletterButtonStyle = styled.button`
    position: absolute;
    padding: 0 10px;
    bottom: 2px;
    height: 38px;
    right: 0;
    font-family: "Gotham-Black";
    font-size: 15px;
    color: ${sharedStyles.unikoWhite};
    outline: none;
    border: none;
    cursor: pointer;
    background: transparent;
`
const SubscribeNewsletterLineStyle = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: ${sharedStyles.unikoWhite};
`

//Main Component
function SubscribeFooter(){
    return (            
        <SubscribeFooterContainerStyle>

            <SubscribeFooterTitleStyle>Suscríbete</SubscribeFooterTitleStyle>

            <SubscribeTsCsContainerStyle>
                <SubscribeTsCsTextStyle>
                    Suscríbete a nuestra newsletter<br/>
                    Pero antes, es imprescindible  que aceptes los <Link to="/terminos-y-condiciones/"><span>Términos y Condiciones</span></Link>
                </SubscribeTsCsTextStyle>
                <SubscribeTsCsCheckboxStyle type="checkbox" id="termsAndConditions" name="termsAndConditions" value="termsAndConditions" /> 
            </SubscribeTsCsContainerStyle>


            <SubscribeNewsletterCointainerStyle>
                <SubscribeNewsletterEmailInputStyle  type="email" pattern=".+@globex.com" id="email" size="30" placeholder="Escribe aquí tu email" required />
                <SubscribeNewsletterButtonStyle type="submit" >ENVIAR</SubscribeNewsletterButtonStyle>
                <SubscribeNewsletterLineStyle></SubscribeNewsletterLineStyle>
            </SubscribeNewsletterCointainerStyle>

        </SubscribeFooterContainerStyle>
    )
}

//Export
export default SubscribeFooter;