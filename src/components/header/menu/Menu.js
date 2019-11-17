//Library Imports
import React, { useState, useRef, useEffect } from 'react'
import { NavLink } from "react-router-dom"
import styled from 'styled-components'
import { TimelineMax } from 'gsap/all'
//Style Imports
import * as sharedStyles from '../../../data/sharedStyles'
//Component Imports
import LogoStroke from '../logo/LogoStroke'
import HamburgerBox from './hamburgerBoxMenu/HamburgerBoxMenu'
import LanguageOptions from './languageOptionsMenu/LanguageOptionsMenu'
import SocialsMenu from './socialsMenu/SocialsMenu'
import PoliciesMenu from './policiesMenu/PoliciesMenu'


//Styles
//OPEN MENU
const OpenMenuStyle = styled.div`
    position: fixed;
    z-index: ${sharedStyles.zOpenMenu};
    background: ${sharedStyles.unikoBlack};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: none;
`
const NavListStyle = styled.ul`
    position: absolute;
    top: ${sharedStyles.h170px};
    left: 50vw;
    transform: translateX(-50%);
    text-align: center;
    list-style-type: none;
    color: ${sharedStyles.unikoWhite};
    font-size: 56px;
    line-height: 56px;
    font-family: "Gotham-Black";
    text-transform: uppercase;
    // letter-spacing: 1px; 
`
const NavItemStyle = styled.li`
    margin-bottom: 5px;
`
const NavLinkStyle = styled(NavLink)`
    text-decoration: none;
    color: ${ sharedStyles.unikoWhite };
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${sharedStyles.unikoWhite};
    transition: 0.4s;
    &:hover{
        color: ${sharedStyles.unikoBlack};
    }
`


//Main Component
function Menu(){

    // reference to the DOM node
    let line01Ref = useRef(null)
    let line02Ref = useRef(null)
    let line03Ref = useRef(null)
    let menuShadowRef = useRef(null)
    let openNavRef = useRef(null)
    let languagesRef = useRef(null)
    let socialsRef = useRef(null)
    let policiesRef = useRef(null)

    // Initialize to the animation
    const [menuTween] = useState(new TimelineMax({ paused: true, reversed: true }))

    //Animation
    useEffect( () => {
        //Hamburguer Menu Anim
        menuTween.to( line01Ref, 0.4, {y: 7} )
        menuTween.to( line03Ref, 0.4, {y: -7}, "-=0.4"  )
        menuTween.to( line02Ref, 0.4, {display: "none"}, "-=0.4"  )
        menuTween.to( menuShadowRef, 0.4, { top: 0, right: 0, width: "100vw", height: "100vh", transformOrigin: "center", display: "block" }  )
        menuTween.to( line01Ref, 0.4, { rotation: 45}, "-=0.4" )
        menuTween.to( line03Ref, 0.4, { rotation: "-45"}, "-=0.4" )
        //Open Menu Anim
        menuTween.to( openNavRef, 0.4, { display: "block"} )
        menuTween.staggerFrom( ".navItemStaggerTweenRef", 1.2, { opacity:0, y: "-15"}, 0.125, "-=0.4" )
        menuTween.from( languagesRef, 0.4, { opacity:0 }, "-=0.8" )
        menuTween.from( socialsRef, 0.4, { opacity:0 }, "-=0.8" )
        menuTween.from( policiesRef, 0.4, { opacity:0 }, "-=0.8" )
    }, [menuTween])


    const menuClickTween = () => {
        menuTween.reversed() ? menuTween.play() : menuTween.reverse();

    }

    return (
        <>
        <HamburgerBox 
            onClickProp={ menuClickTween } 
            refLineOne={ div => {line01Ref = div} }
            refLineTwo={ div => {line02Ref = div} }
            refLineThree={ div => {line03Ref = div} }
            refMenuShadow={ div => { menuShadowRef = div } }
        />

        <OpenMenuStyle ref={ div => {openNavRef = div} }>

            <LogoStroke />

            <LanguageOptions refLanguages={ div => {languagesRef = div} } />

            <nav>
                <NavListStyle>

                    <NavItemStyle className="navItemStaggerTweenRef">
                        <NavLinkStyle  
                            to="/"
                            onClick={ menuClickTween } 
                            exact
                        >
                            Inicio
                        </NavLinkStyle>
                    </NavItemStyle>

                    <NavItemStyle className="navItemStaggerTweenRef">
                        <NavLinkStyle  
                            to="/models/female/mainboard" 
                            onClick={ menuClickTween } 
                        >
                            Female
                        </NavLinkStyle>
                        {" "}{" "}|{" "}{" "}
                        <NavLinkStyle  
                            to="/models/male/mainboard" 
                            onClick={ menuClickTween } 
                        >
                            Male
                        </NavLinkStyle>
                    </NavItemStyle>

                    <NavItemStyle className="navItemStaggerTweenRef">
                        <NavLinkStyle 
                            to="/become-a-model/" 
                            onClick={ menuClickTween } 
                            exact
                        >
                            Become A Model
                        </NavLinkStyle>
                    </NavItemStyle>

                    <NavItemStyle className="navItemStaggerTweenRef">
                        <NavLinkStyle to="/noticias/" >Noticias</NavLinkStyle>
                    </NavItemStyle>

                    <NavItemStyle className="navItemStaggerTweenRef">
                        <NavLinkStyle to="/sobre-nosotros/" >Sobre Nosotros</NavLinkStyle>
                    </NavItemStyle>

                    <NavItemStyle className="navItemStaggerTweenRef">
                        <NavLinkStyle to="/contacto/" >Contacto</NavLinkStyle>
                    </NavItemStyle>

                </NavListStyle>
            </nav>

            <SocialsMenu refSocials={ div => {socialsRef = div} } />

            <PoliciesMenu refPolicies={ div => {policiesRef = div} } />

        </OpenMenuStyle>
        </>
    )
}


//Exports
export default Menu
