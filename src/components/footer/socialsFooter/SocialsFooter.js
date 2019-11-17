//Library Imports
import React from 'react'
import styled from 'styled-components'
//Image Imports
import instagramIcon from '../../../assets/logos&icons/instagramWhite.svg'
import vimeoIcon from '../../../assets/logos&icons/vimeoWhite.svg'

//Styles
const SocialsFooterContainerStyle = styled.div`
    position: absolute;
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


//Main Component
function SocialsFooter() {
    return (
        <SocialsFooterContainerStyle>
            <SocialLinkStyle href="https://www.instagram.com/unikomodels/" target="_blank"><SocialIconStyle src={instagramIcon} /></SocialLinkStyle>
            <SocialLinkStyle href="https://vimeo.com/user17343918" target="_blank"><SocialIconStyle src={vimeoIcon} /></SocialLinkStyle>
        </SocialsFooterContainerStyle>
    );
}


//Export
export default SocialsFooter;