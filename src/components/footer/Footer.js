//Library Imports
import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { TimelineMax } from 'gsap/all'
//Style Imports
import * as sharedStyles from '../../data/sharedStyles'
//Image Imports
import plusWhite from '../../assets/logos&icons/plusWhite.svg'
import unikoIcon from '../../assets/logos&icons/unikoImagotipo.svg'
//Component Imports
import SubscribeFooter from './subscribeFooter/SubscribeFooter'
import ContactMapFooter from './contactMapFooter/ContactMapFooter'
import PolciesFooter from './policiesFooter/PoliciesFooter'
import SocialsFooter from './socialsFooter/SocialsFooter'


//Styles
const PlusFooterBoxStyle = styled.div`
    position: fixed;
    bottom: ${sharedStyles.h30px};
    left: ${sharedStyles.w40px};
    background: ${sharedStyles.unikoBlack};
    width: 42px;
    height: 40px;
    z-index: ${sharedStyles.zPlusFooterBox};
    cursor: pointer;
`
const PlusFooterStyle = styled.img`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`
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
    z-index: ${sharedStyles.zOpenFooterContainer};
`
const OpenFooterContentStyle = styled.div`
    position: absolute;
    height: 230px;
    top: 60px;
    left: ${sharedStyles.w100px};
    right: ${sharedStyles.w100px};
    bottom: 40px;
    z-index: ${sharedStyles.zOpenFooterContent};
    display: none;
    opacity: 0;
`
const UnikoFooterIconStyle = styled.img`
    position: absolute;
    bottom: 40px;
    right: 40px;
    display: none;
    opacity: 0;
`



//Main Component
function Footer() {

    // reference to the DOM node
    let openFooterRef = useRef(null)
    let openFooterContentRef = useRef(null)
    let unikoFooterIconRef = useRef(null)
    let plusRef = useRef(null)

    // reference to the animation
    const [footerTween] = useState(new TimelineMax({ paused: true, reversed: true }));

    //Animation
    useEffect( () => {
        footerTween.to( plusRef, 0.4, { rotation: 45 })
        footerTween.to( openFooterRef, 0.4, { bottom: "0" }, "-=0.4")
        footerTween.to( openFooterRef, 0.4, { bottom: 0, left: 0, width: "100vw", height: "330px", transformOrigin: "center"}, "-=0.4" )
        footerTween.to( openFooterContentRef, 0, { display: "block"})
        footerTween.to( openFooterContentRef, 0.4, { opacity: "1" })
        footerTween.to( unikoFooterIconRef, 0.4, { opacity: "1", display: "block" }, "-=0.4")
    }, [footerTween])
    
    //Toggle logic
    const handleFooterTweenClick = () => {
        footerTween.reversed() ? footerTween.play() : footerTween.reverse();
    }

    return (
        <>
        <PlusFooterBoxStyle onClick={ handleFooterTweenClick } >
            <PlusFooterStyle src={ plusWhite } ref={ img => { plusRef = img }} />
        </PlusFooterBoxStyle>

        <OpenFooterContainerStyle  ref={ div => { openFooterRef = div } }> 

            <OpenFooterContentStyle ref={ div => { openFooterContentRef = div } }>
                <SubscribeFooter />
                <PolciesFooter />
                <ContactMapFooter />
                <SocialsFooter />
            </OpenFooterContentStyle>

            <UnikoFooterIconStyle ref={ img => { unikoFooterIconRef = img } } src={unikoIcon} />

        </OpenFooterContainerStyle>  
        </>
    );
}

//Export
export default Footer;