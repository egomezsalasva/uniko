//Library Imports
import React, {Component, Fragment} from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'
import { TimelineMax } from 'gsap/all'
//Style Imports
import * as sharedStyles from '../../data/sharedStyles'
//Image Imports
import plusWhite from '../../assets/logos&icons/plusWhite.svg'
import unikoIcon from '../../assets/logos&icons/unikoImagotipo.svg'
import instagramIcon from '../../assets/logos&icons/instagramWhite.svg'
import vimeoIcon from '../../assets/logos&icons/vimeoWhite.svg'


//Styles
const ArrowFooterBoxStyle = styled.div`
    position: fixed;
    bottom: ${sharedStyles.h30px};
    left: ${sharedStyles.w40px};
    background: ${sharedStyles.unikoBlack};
    width: 42px;
    height: 40px;
    z-index: 150;
    cursor: pointer;
`
const ArrowFooterStyle = styled.img`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`
//Open Footer
const OpenFooterContainerStyle = styled.div`
    position: fixed;
    background: ${sharedStyles.unikoBlack};
    //border: 2px solid ${sharedStyles.unikoBlack};
    //height: 330px;
    width: 42px;
    height: 40px;
    //left: 0;
    left: ${sharedStyles.w40px};
    //right: 0;
    //bottom: -332px;
    bottom: ${sharedStyles.h30px};
    z-index: 100;
`
const OpenFooterContentStyle = styled.div`
    position: absolute;
    height: 230px;
    top: 60px;
    left: ${sharedStyles.w100px};
    right: ${sharedStyles.w100px};
    bottom: 40px;
    z-index: 100;
    display: none;
    opacity: 0;
`
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
    color: ${sharedStyles.unikoWhite}
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
const SocialsFooterContainerStyle = styled.div`
    position: absolute;
    width: 8.75vw;
    height: 25px;
    bottom: 0px;
    left: 43.0555556vw;
`
const SocialIconStyle = styled.img`
    padding-right: 20px;
    &:last-of-type{
        padding-right: 0px; 
    }
    transition: 0.4s;
    opacity: 0.5;
    &:hover{
        opacity: 1;
    }
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
    font-family: Gotham-Bold;
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
const UnikoFooterIconStyle = styled.img`
    position: absolute;
    bottom: 40px;
    right: 40px;
    display: none;
    opacity: 0;
`



//Main Component
class Footer extends Component {
    constructor(props){
        super(props);
        // reference to the DOM node
        this.openFooterRef = null
        this.openFooterContentRef = null
        this.arrowFooterBoxStyle  = null
        this.unikoFooterIconRef = null
        this.plusRef = null
        // reference to the animation
        this.menuFooterTween = null
        this.plusHoverTween = null
    }

    componentDidMount(){
        this.menuFooterTween = new TimelineMax({ paused: true, reversed: true })
            this.menuFooterTween.to(this.plusRef, 0.4, { rotation: 45 })
            this.menuFooterTween.to(this.openFooterRef, 0.4, { bottom: "0" }, "-=0.4")
            this.menuFooterTween.to(this.openFooterRef, 0.4, { bottom: 0, left: 0, width: "100vw", height: "330px", transformOrigin: "center"}, "-=0.4" )
            //this.menuFooterTween.to(this.arrowFooterBoxStyle, 0.4, { border: "2px solid transparent" }, "-=0.4")
            this.menuFooterTween.to(this.openFooterContentRef, 0, { display: "block"})
            this.menuFooterTween.to(this.openFooterContentRef, 0.4, { opacity: "1" })
            this.menuFooterTween.to(this.unikoFooterIconRef, 0.4, { opacity: "1", display: "block" }, "-=0.4")

        this.plusHoverTween = new TimelineMax({ paused: true })
            this.plusHoverTween.to(this.plusRef, 0.4, { rotation: 90 })
    }

    handlePlusClick  = () => {
        this.menuFooterTween.reversed() ? this.menuFooterTween.play() : this.menuFooterTween.reverse();
        this.plusHoverTween.clear()
    }

    render(){
        return (
            <Fragment>

                <ArrowFooterBoxStyle 
                    ref={div => this.arrowFooterBoxStyle = div} 
                    onClick={ this.handlePlusClick }
                >
                    <ArrowFooterStyle 
                        src={plusWhite}
                        ref={img => this.plusRef = img} 
                    />
                </ArrowFooterBoxStyle>

                <OpenFooterContainerStyle ref={div => this.openFooterRef = div}>

                    <OpenFooterContentStyle ref={div => this.openFooterContentRef = div}>



                        <SubscribeFooterContainerStyle>

                            <SubscribeFooterTitleStyle>Suscríbete</SubscribeFooterTitleStyle>


                            <SubscribeTsCsContainerStyle>
                                <SubscribeTsCsTextStyle>
                                    Suscríbete a nuestra newsletter<br/>
                                    Pero antes, es imprescindible  que aceptes los <Link><span>Términos y Condiciones</span></Link>
                                </SubscribeTsCsTextStyle>
                                <SubscribeTsCsCheckboxStyle type="checkbox" id="termsAndConditions" name="termsAndConditions" value="termsAndConditions" /> 
                            </SubscribeTsCsContainerStyle>


                            <SubscribeNewsletterCointainerStyle>
                                <SubscribeNewsletterEmailInputStyle  type="email" pattern=".+@globex.com" id="email" size="30" placeholder="Escribe aquí tu email" required />
                                <SubscribeNewsletterButtonStyle type="submit" >ENVIAR</SubscribeNewsletterButtonStyle>
                                <SubscribeNewsletterLineStyle></SubscribeNewsletterLineStyle>
                            </SubscribeNewsletterCointainerStyle>

                        </SubscribeFooterContainerStyle>







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


                        <PoliciesFooterContainerStyle>
                            <PoliciesLinkStyle href={"#avisolegal"}>Aviso Legal</PoliciesLinkStyle> | <PoliciesLinkStyle href={"#politicaprivacidad"}>Política de Privacidad</PoliciesLinkStyle> | <PoliciesLinkStyle href={"#politicacookies"}>Política de Cookies</PoliciesLinkStyle>
                        </PoliciesFooterContainerStyle>


                        <SocialsFooterContainerStyle>
                            <SocialIconStyle src={instagramIcon} />
                            <SocialIconStyle src={vimeoIcon} />
                        </SocialsFooterContainerStyle>

                    </OpenFooterContentStyle>

                    <UnikoFooterIconStyle ref={div => this.unikoFooterIconRef = div} src={unikoIcon} />

                </OpenFooterContainerStyle>
                
            </Fragment>
        );
    }
}

//Export
export default Footer;