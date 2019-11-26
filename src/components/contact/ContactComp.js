//Library Imports
import React, { useState, useRef, useEffect }  from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'
import { TimelineMax } from 'gsap/all'
//Component Imports
import * as sharedStyles from '../../data/sharedStyles'
//Image Imports
import instagramIcon from '../../assets/logos&icons/instagramWhite.svg'
import vimeoIcon from '../../assets/logos&icons/vimeoWhite.svg'
import teamPhoto from '../../assets/images/about/shutterstock.jpg'
import ejemplo1 from '../../assets/images/about/ejemplo1.jpg'
import ejemplo2 from '../../assets/images/about/ejemplo2.jpg'
import ejemplo3 from '../../assets/images/about/ejemplo3.jpg'
import ejemplo4 from '../../assets/images/about/ejemplo4.jpg'



//Styles
const LeftAboutContainerStyle = styled.div`
    width: 50vw;
    height: 100vh;
`
const ContentContainerStyle = styled.div`
    position: absolute;
    top: ${sharedStyles.h160px};
    left: ${sharedStyles.w70px};
    /* background: yellow; */
`
const AboutTitleStyle = styled.h2`
    font-family: 'Gotham-Bold';
    font-size: 27px;
    color: ${sharedStyles.unikoBlack};
    margin-left: 10px;
`
const LineStyle = styled.div`
    position: relative;
    margin-top: 10px;
    width: ${sharedStyles.w490px};
    height: 1px;
    background: ${sharedStyles.unikoBlack};
`
const AboutTextStyle = styled.p`
    width: ${sharedStyles.w470px};
    font-family: 'Gotham-Book';
    font-size: 13px;
    color: ${sharedStyles.unikoBlack};
    margin-top: 30px;
    margin-left: 10px;
    margin-bottom: 30px;
`
const TeamContainerStyle = styled.div`
    margin-left: 10px;
    width: ${sharedStyles.w470px};
`
const TeamTabContainerStyle = styled.div`
    display: inline-block;
    width: ${sharedStyles.w180px};
    font-family: 'Gotham-Bold';
    margin-top: 30px;
    &:nth-child(odd){
        margin-right: 80px;
    }
`
const NameTeamTabStyle = styled.h3`
    font-family: 'Gotham-Bold';
    font-size: 12px;
    color: ${sharedStyles.unikoBlack};
`
const TextTeamTabStyle = styled.p`
    font-family: 'Gotham-Book';
    font-size: 13px;
    color: ${sharedStyles.unikoBlack};
    text-transform: uppercase;
    margin-top: 10px;
`
const ContactButtonStyle = styled.p`
    display: inline-block;
    font-family: 'Gotham-Bold';
    font-size: 27px;
    color: ${sharedStyles.unikoBlack};
    text-transform: uppercase;
    margin-top: 60px;
    margin-left: 10px;
    cursor: pointer;
`

const RightAboutContainerStyle = styled.div`
    width: 50vw;
    height: 100vh;
    background: red;
    position:absolute;
    right: 0;
    top: 0;
    bottom: 0;
`
const TeamPhotoStyle = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`





const ContactContainerStyle = styled.div`
    width: 50vw;
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
`
const OverflowContainerStyle = styled.div`
    width: 50vw;
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    background: ${sharedStyles.unikoBlack};   
`
const ContactTitleStyle = styled.h2`
    font-family: 'Gotham-Bold';
    font-size: 27px;
    color: ${sharedStyles.unikoWhite};
    margin-left: 10px;
`
const LineWhiteStyle = styled.div`
    position: relative;
    margin-top: 10px;
    width: ${sharedStyles.w490px};
    height: 1px;
    background: ${sharedStyles.unikoWhite};
`
const ContainerDetailContactStyle = styled.div`
    position: relative;
    margin-top: 20px;
    margin-left: 10px;
`
const ContactDetailsTextStyle = styled.div`
    font-family: "Gotham-Bold";
    font-size: 13px;
    line-height: 24px;
    font-family: "Gotham-Bold";
    width: calc(49.5% - 10px);
    display: inline-block;
    margin-left: 10px;
    color: ${sharedStyles.unikoWhite};
`
const MapsTextStyle = styled.a`
    display: block;
    font-family: 'Gotham-Bold';
    font-size: 13px;
    line-height: 24px;
    font-family: "Gotham-Bold";
    width: calc(49.5% - 10px);
    display: inline-block;
    margin-left: 10px;
    color: ${sharedStyles.unikoWhite};
    text-decoration: none;
`
const SocialsContactContainerStyle = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 10px;
    width: 8.75vw;
    height: 25px;
    bottom: 0px;
    left: 43.0555556vw;
`
const SocialLinkStyle = styled.a`
    padding-right: 20px;
    &:last-of-type{
        padding-right: 0px; 
    }
`
const SocialIconStyle = styled.img`
    transition: 0.4s;
    opacity: 0.5;
    &:hover{
        opacity: 1;
    }
`
const TeamButtonStyle = styled(ContactButtonStyle)`
    color: ${sharedStyles.unikoWhite};
    margin-top: 110px;
    margin-left: 10px;
`


const SubscribeContactContainerStyle = styled.div`
   margin-top: 20px;
`
const SubscribeFooterTitleStyle = styled.h2`
    font-family: "Gotham-Black";
    font-size: 22px;
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
    margin-top: 30px;
    width: 100%;
    height: 30px;
`
const SubscribeNewsletterEmailInputStyle = styled.input`
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
    padding: 0 10px;
    height: 38px;
    font-family: "Gotham-Black";
    font-size: 15px;
    color: ${sharedStyles.unikoWhite};
    outline: none;
    border: none;
    cursor: pointer;
    background: transparent;
`
const SubscribeNewsletterLineStyle = styled.div`
    width: 100%;
    height: 2px;
    background: ${sharedStyles.unikoWhite};
`

//Subcomponents
function  TeamTab(props) {
    return(
        <>
        <TeamTabContainerStyle onMouseEnter= { props.mouseEnterHandler } onMouseLeave= { props.mouseLeaveHandler }>
            <NameTeamTabStyle>{props.name}</NameTeamTabStyle>
            <TextTeamTabStyle>
                {props.title} <br/>
                {props.phone} <br/>
                {props.email}
            </TextTeamTabStyle>
        </TeamTabContainerStyle>
        
        </>
    )
}

//Main Component
function Contact() {

    const [photoSource, setPhotoSrc] = useState(teamPhoto);

    // reference to the DOM node
    let contactModalRef = useRef(null)

    // reference to the animation
    const [contactModalTween] = useState(new TimelineMax({ paused: true, reversed: true }));

    //Animation
    useEffect( () => {
        contactModalTween.to( contactModalRef, 0.4, { right: "-50vw" })
    }, [contactModalTween])

    const photoOneHandler = () => {
        setPhotoSrc(ejemplo1)
    }
    const photoTwoHandler = () => {
        setPhotoSrc(ejemplo2)
    }
    const photoThreeHandler = () => {
        setPhotoSrc(ejemplo3)
    }
    const photoFourHandler = () => {
        setPhotoSrc(ejemplo4)
    }
    const teamPhotoHandler = () => {
        setPhotoSrc(teamPhoto)
    }


    return (
        <>
        <LeftAboutContainerStyle>
            <ContentContainerStyle>

                <AboutTitleStyle>Sobre Nosotros</AboutTitleStyle>
                <LineStyle/>
                <AboutTextStyle>UNIKO Models es una agencia de modelos de Barcelona especializada en moda, editoriales, catálogos, cine, tv y publicidad. Tenemos modelos nacionales e internacionales de todas las etnias y trabajamos con todos los países de Europa. UNIKO Models nació con la idea de crear una nueva atmósfera en la relación modelo – agencia – cliente. Nuestra experiencia como modelos nos ha dado un amplio conocimiento de la industria del modelado, tanto a nivel nacional como internacional.</AboutTextStyle>
                <LineStyle/>

                <TeamContainerStyle>
                    <TeamTab 
                        name="Nacho Dopico" 
                        title="OWNER & DIRECTOR" 
                        phone="(+34) 625 473 497" 
                        email="nacho@unikomodels.com"
                        mouseEnterHandler={photoOneHandler}
                        mouseLeaveHandler={teamPhotoHandler}
                    />   
                    <TeamTab 
                        name="Maximiliano Urnezius" 
                        title="HEAD BOOKER" 
                        phone="(+34) 654 321 060"
                        email="maxi@unikomodels.com"
                        mouseEnterHandler={photoTwoHandler}
                        mouseLeaveHandler={teamPhotoHandler}
                    />
                    <TeamTab 
                        name="Cristina Guillen" 
                        title="OWNER & SCOUT" 
                        phone="(+34) 647 644 638" 
                        email="cris@unikomodels.com"
                        mouseEnterHandler={photoThreeHandler}
                        mouseLeaveHandler={teamPhotoHandler}
                    />
                    <TeamTab 
                        name="Patrick Staal" 
                        title="OWNER & SCOUT" 
                        phone="(+34) 686 303 426" 
                        email="patrick@unikomodels.com"
                        mouseEnterHandler={photoFourHandler}
                        mouseLeaveHandler={teamPhotoHandler}
                    />
                </TeamContainerStyle>

                <ContactButtonStyle onClick={ () =>{ contactModalTween.reverse()} }>Contact</ContactButtonStyle>

            </ContentContainerStyle>
        </LeftAboutContainerStyle>

        <RightAboutContainerStyle>
            <TeamPhotoStyle src={photoSource}/>
        </RightAboutContainerStyle> 

        <ContactContainerStyle >
            <OverflowContainerStyle ref={div => { contactModalRef = div }}>
                <ContentContainerStyle>
                    <ContactTitleStyle>Contacta Con Nosotros</ContactTitleStyle>
                    <LineWhiteStyle/>
                        <ContainerDetailContactStyle>
                            <ContactDetailsTextStyle>
                                Tel: (+34) 931 400 372 <br/>
                                Email: info@unikomodels.com
                            </ContactDetailsTextStyle>
                            <MapsTextStyle href="https://www.google.com/maps/place/Carrer+de+Pallars,+84,+3a,+08018+Barcelona/@41.3947098,2.1877848,17z/data=!3m1!4b1!4m5!3m4!1s0x12a4a31bee2fb19d:0xf0d880f8627deb3e!8m2!3d41.3947098!4d2.1899735" target="_blank">
                                Carrer de Pallars, 84-86, 2º, 3ª <br/> 
                                08018 Barcelona
                            </MapsTextStyle>
                        </ContainerDetailContactStyle>
                        <SocialsContactContainerStyle>
                            <SocialLinkStyle href="https://www.instagram.com/unikomodels/" target="_blank"><SocialIconStyle src={instagramIcon} /></SocialLinkStyle>
                            <SocialLinkStyle href="https://vimeo.com/user17343918" target="_blank"><SocialIconStyle src={vimeoIcon} /></SocialLinkStyle>
                        </SocialsContactContainerStyle>
                    <LineWhiteStyle/>

                    <SubscribeContactContainerStyle>

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

                    </SubscribeContactContainerStyle>

                    <TeamButtonStyle onClick={() =>{ contactModalTween.play() } }>Team</TeamButtonStyle>

                </ContentContainerStyle>
            </OverflowContainerStyle>
        </ContactContainerStyle>


        </>
    )
}



//Export
export default Contact;