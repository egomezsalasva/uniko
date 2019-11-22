//Library Imports
import React from 'react'
import styled from 'styled-components'
//Component Imports
import * as sharedStyles from '../../data/sharedStyles'


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
const LineStyle = styled.h2`
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

//Subcomponents
function  TeamTab(props) {
    return(
        <>
        <TeamTabContainerStyle>
            <NameTeamTabStyle>{props.name}</NameTeamTabStyle>
            <TextTeamTabStyle>
                {props.title} <br/>
                {props.phone}
            </TextTeamTabStyle>
        </TeamTabContainerStyle>
        
        </>
    )
}

//Main Component
function LeftAbout() {
    return (
        <>
        <LeftAboutContainerStyle>
            <ContentContainerStyle>

                <AboutTitleStyle>Sobre Nosotros</AboutTitleStyle>
                <LineStyle/>
                <AboutTextStyle>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia.</AboutTextStyle>
                <LineStyle/>

                <TeamContainerStyle>
                    <TeamTab name="Nacho Dopico" title="OWNER & MODEL SCOUT" phone="(+34) 625 473 497" />
                    <TeamTab name="Nacho Dopico" title="OWNER & MODEL SCOUT" phone="(+34) 625 473 497" />
                    <TeamTab name="Nacho Dopico" title="OWNER & MODEL SCOUT" phone="(+34) 625 473 497" />
                    <TeamTab name="Nacho Dopico" title="OWNER & MODEL SCOUT" phone="(+34) 625 473 497" />
                </TeamContainerStyle>


            </ContentContainerStyle>
        </LeftAboutContainerStyle> 
        </>
    )
}



//Export
export default LeftAbout;