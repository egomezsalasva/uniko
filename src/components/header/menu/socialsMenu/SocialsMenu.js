//Library Imports
import React from 'react'
import styled from 'styled-components'
//Style Imports
import * as sharedStyles from '../../../../data/sharedStyles'
//Image Imports
import instagramIcon from '../../../../assets/logos&icons/instagramWhite.svg'
import vimeoIcon from '../../../../assets/logos&icons/vimeoWhite.svg'


//Styles
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
function SocialsMenu(props){
    return (
        <SocialsContainerStyle ref={ props.refSocials }>
            <SocialLinkStyle href="https://www.instagram.com/unikomodels/" target="_blank"><SocialIconStyle src={instagramIcon} /></SocialLinkStyle>
            <SocialLinkStyle href="https://vimeo.com/user17343918" target="_blank"><SocialIconStyle src={vimeoIcon} /></SocialLinkStyle>
        </SocialsContainerStyle>
    )
}

//Exports
export default SocialsMenu
