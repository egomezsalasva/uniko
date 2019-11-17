//Library Imports
import React from 'react'
import styled from 'styled-components'
//Style Imports
import * as sharedStyles from '../../../data/sharedStyles'


//Styles
const SubscribeFooterTitleStyle = styled.h2`
    font-family: "Gotham-Black";
    font-size: 30px;
    color: ${sharedStyles.unikoWhite};
`
const ContactMapsFooterContainerStyle = styled.div`
    position: absolute;
    width: 41.6666667vw;
    height: 140px;
    top: 0px;
    right: 0px;
`
const ContactMapsLineStyle = styled.div`
    position: relative;
    top: 20px;
    width: 100%;
    height: 2px;
    background: ${sharedStyles.unikoWhite};
`
const ContactFooterTitleStyle = styled(SubscribeFooterTitleStyle)`
    position: relative;
    display: inline-block;
    margin-left: 10px;
    width: calc(49.5% - 10px);
`
const ContactFooterTextStyle = styled.div`
    position: relative;
    top: calc(20px + 2px + 30px);
    font-family: "Gotham-Bold";
    font-size: 13px;
    line-height: 24px;
    font-family: "Gotham-Bold";
    width: calc(49.5% - 10px);
    display: inline-block;
    margin-left: 10px;
    color: ${sharedStyles.unikoWhite};
`
const MapsFooterTextStyle = styled.a`
    display: block;
    position: relative;
    top: calc(20px + 2px + 30px);
    font-family: Gotham-Bold;
    font-size: 13px;
    line-height: 24px;
    font-family: "Gotham-Bold";
    width: calc(49.5% - 10px);
    display: inline-block;
    margin-left: 10px;
    color: ${sharedStyles.unikoWhite};
    text-decoration: none;
`

//Main Component
function ContactMapFooter(){
    return (            
        <ContactMapsFooterContainerStyle>
            <ContactFooterTitleStyle>Contacto</ContactFooterTitleStyle>
            <ContactFooterTitleStyle>Ver En Maps</ContactFooterTitleStyle>
            <ContactMapsLineStyle></ContactMapsLineStyle>
            <ContactFooterTextStyle>
                Tel: (+34) 931 400 372 <br/>
                Email: info@unikomodels.com
            </ContactFooterTextStyle>
            <MapsFooterTextStyle href="https://www.google.com/maps/place/Carrer+de+Pallars,+84,+3a,+08018+Barcelona/@41.3947098,2.1877848,17z/data=!3m1!4b1!4m5!3m4!1s0x12a4a31bee2fb19d:0xf0d880f8627deb3e!8m2!3d41.3947098!4d2.1899735" target="_blank">
                Carrer de Pallars, 84-86, 2º, 3ª <br/> 
                08018 Barcelona
            </MapsFooterTextStyle>
        </ContactMapsFooterContainerStyle>
    )
}

//Export
export default ContactMapFooter;