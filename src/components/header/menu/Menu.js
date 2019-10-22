//Library Imports
import React, {Component, Fragment} from 'react'
import { NavLink } from "react-router-dom"
import styled from 'styled-components'
import { TimelineMax } from 'gsap/all'
//Style Imports
import * as sharedStyles from '../../../data/sharedStyles'
//Image Imports
import instagramIcon from '../../../assets/logos&icons/instagramWhite.svg'
import vimeoIcon from '../../../assets/logos&icons/vimeoWhite.svg'


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
const SocialsContainerStyle = styled.div`
    position: absolute;
    bottom: ${sharedStyles.h130px};
    left: 50vw;
    transform: translateX(-50%);
`
const SocialIconStyle = styled.img`
    opacity: 0.5;
    transition: 0.4s;
    &:hover{
        opacity: 1;
    }
`
const SocialLinkStyle = styled.a`
    padding-right: 20px;
    &:last-of-type{
        padding-right: 0px; 
    }
`


//Main Component
class Menu extends Component {

    constructor(props){
        super(props);
        // reference to the DOM node
        this.line01Ref = null
        this.line02Ref = null
        this.line03Ref = null
        this.menuShadowRef = null
        this.openNavRef = null
        this.navItemRef = null
        this.languagesRef = null
        this.socialsRef = null
        this.policiesRef = null
        this.searchboxRef = null
        // reference to the animation
        this.menuTween = null
    }

    componentDidMount(){

        this.menuTween = new TimelineMax({ paused: true, reversed: true })
            //Hamburguer Menu Anim
            this.menuTween.to(this.line01Ref, 0.4, {y: 7})
            this.menuTween.to(this.line03Ref, 0.4, {y: -7}, "-=0.4" )
            this.menuTween.to(this.line02Ref, 0.4, {display: "none"}, "-=0.4" )
            this.menuTween.to(this.menuShadowRef, 0.4, { top: 0, right: 0, width: "100vw", height: "100vh", transformOrigin: "center", display: "block" } )
            this.menuTween.to(this.line01Ref, 0.4, { rotation: 45}, "-=0.4")
            this.menuTween.to(this.line03Ref, 0.4, { rotation: "-45"}, "-=0.4")
            //Open Menu Anim
            this.menuTween.to(this.openNavRef, 0.4, { display: "block"})
            this.menuTween.staggerFrom(".navItemTweenRef", 1.2, { opacity:0, y: "-15"}, 0.125, "-=0.4")
            this.menuTween.from(this.languagesRef, 0.4, { opacity:0 }, "-=0.8")
            this.menuTween.from(this.socialsRef, 0.4, { opacity:0 }, "-=0.8")
            this.menuTween.from(this.policiesRef, 0.4, { opacity:0 }, "-=0.8")
    }


    menuTweenClick = (e) => {
        // e.preventDefault()
        this.menuTween.reversed() ? this.menuTween.play() : this.menuTween.reverse();
        this.props.menuLogoToggleHandler()
    }


    render() {
        return (
            <Fragment>

                {/* Hamburger Box */}
                <HamburgerMenuStyle onClick={this.menuTweenClick}>
                    <LineContainerStyle>
                        <Line01Style ref={div => this.line01Ref = div}  />
                        <Line02Style ref={div => this.line02Ref = div} />
                        <Line03Style ref={div => this.line03Ref = div} />
                    </LineContainerStyle>
                </HamburgerMenuStyle>
                <HamburgerMenuShadowStyle ref={div => this.menuShadowRef = div} />


                {/* Open Menu */}
                <OpenMenuStyle ref={div => this.openNavRef = div}>

                    {/* Language Options */}
                    <LanguageContainerStyle ref={div => this.languagesRef = div}>
                        <LanguageLinkStyle href={"#es"} active >ES</LanguageLinkStyle> | <LanguageLinkStyle href={"#en"}>EN</LanguageLinkStyle>
                    </LanguageContainerStyle>

                    {/* Nav Options */}
                    <nav>
                        <NavListStyle>

                            <NavItemStyle className="navItemTweenRef">
                                <NavLinkStyle  
                                    to="/"
                                    onClick={ this.menuTweenClick } 
                                    exact
                                    // activeClassName="navActive"
                                    // onMouseEnter={this.props.menuLogoToggleHandler} 
                                    // onMouseLeave={this.props.menuLogoToggleHandler}
                                >
                                    Inicio
                                </NavLinkStyle>
                            </NavItemStyle>

                            <NavItemStyle className="navItemTweenRef">
                                <NavLinkStyle  
                                    to="/female" 
                                    onClick={ this.menuTweenClick } 
                                    // activeClassName="navActive"
                                >
                                    Female
                                </NavLinkStyle>
                                {" "}|{" "}
                                <NavLinkStyle  
                                    to="/male" 
                                    onClick={ this.menuTweenClick } 
                                    // activeClassName="navActive"
                                >
                                    Male
                                </NavLinkStyle>
                            </NavItemStyle>

                            <NavItemStyle className="navItemTweenRef">
                                <NavLinkStyle to="/become-a-model/" >Become A Model</NavLinkStyle>
                            </NavItemStyle>
                            <NavItemStyle className="navItemTweenRef">
                                <NavLinkStyle to="/noticias/" >Noticias</NavLinkStyle>
                            </NavItemStyle>
                            <NavItemStyle className="navItemTweenRef">
                                <NavLinkStyle to="/sobre-nosotros/" >Sobre Nosotros</NavLinkStyle>
                            </NavItemStyle>
                            <NavItemStyle className="navItemTweenRef">
                                <NavLinkStyle to="/contacto/" >Contacto</NavLinkStyle>
                            </NavItemStyle>
                        </NavListStyle>
                    </nav>

                    {/* Socials Options */}
                    <SocialsContainerStyle ref={div => this.socialsRef = div}>
                        <SocialLinkStyle href="https://www.instagram.com/unikomodels/" target="_blank"><SocialIconStyle src={instagramIcon} /></SocialLinkStyle>
                        <SocialLinkStyle href="https://vimeo.com/user17343918" target="_blank"><SocialIconStyle src={vimeoIcon} /></SocialLinkStyle>
                    </SocialsContainerStyle>

                    {/* Policies Options */}
                    <PoliciesContainerStyle ref={div => this.policiesRef = div}>
                        <PoliciesLinkStyle href={"#avisolegal"}>Aviso Legal</PoliciesLinkStyle>{"  "}|{"  "}
                        <PoliciesLinkStyle href={"#politicaprivacidad"}>Política de Privacidad</PoliciesLinkStyle>{" "}|{" "}
                        <PoliciesLinkStyle href={"#politicacookies"}>Política de Cookies</PoliciesLinkStyle>
                    </PoliciesContainerStyle>

                </OpenMenuStyle>

            </Fragment>
        )
    }
}


//Exports
export default Menu
