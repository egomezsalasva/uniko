//Library Imports
import React, {Component, Fragment} from 'react'
import {  NavLink } from "react-router-dom"
import styled from 'styled-components'
//Style Imports
import * as sharedStyles from '../../data/sharedStyles'

//Styles
const SubmenuShadowStyle = styled.div`
    position: fixed;
    background: ${sharedStyles.unikoGrey};
    width: ${sharedStyles.w1360px};
    height: ${sharedStyles.h110px};
    height: 110px;
    left: ${sharedStyles.w40px};
    top: 0;
    z-index: ${sharedStyles.zSubmenuModelsBg};
`
const SubMenuModelsBackgroundStyle = styled.div`
    position: fixed;
    background: ${sharedStyles.unikoGrey};
    width: ${sharedStyles.w1360px};
    height: 110px;
    height: 100px;
    left: ${sharedStyles.w40px};
    top: calc(${sharedStyles.h40px} + 45px);
    z-index: ${sharedStyles.zSubmenuModelsBg};
`
const SubmenuContainerStyle = styled.div`
    position: relative;
    //width: 890px;
    width: 1280px;
    height: 46px;
    left: 40px;
    top: 25px;
    z-index: ${sharedStyles.zSubmenuModelsBg};
`
const SubmenuRowContainerStyle = styled.div`
    font-family: 'Gotham-Black';
    font-size: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 6px 0;
`
const SubmenuOptionStyle = styled(NavLink)`
    display: inline-block;
    width: ${sharedStyles.w70px};
    margin-right: ${sharedStyles.w20px};
    color: ${sharedStyles.unikoBlack};
    font-family:  "Gotham-Book" ;
    text-decoration: none;
`
const SubmenuLineContainerStyle = styled.div`
    display: inline-block;
    //width: 326px;
    //width: 22.6388889vw;
    width: 22.5vw;
    margin-right: ${sharedStyles.w20px};
`
const SubmenuLineStyle = styled.div`
    display: ${props => props.active ? "inline-block" : "none" };;
    transform: translateY(-5px);
    background: ${sharedStyles.unikoBlack};
    //width: 326px;
    //width: 22.6388889vw;
    width: 22.5vw;
    height: 1px;
`
const SubmenuFilterContainerStyle = styled.div`
    display: ${props => props.active ? "inline-block" : "none" };
`
const SubmenuFilterOptionStyle = styled(NavLink)`
    display: inline-block;
    color: ${sharedStyles.unikoBlack};
    font-family:  "Gotham-Book" ;
    padding: 0 ${sharedStyles.w10px};
    text-decoration: none;
`


//Main Component
class SubMenuModelsGrid extends Component {
    render(){
        return (
            <Fragment>
                <SubmenuShadowStyle />
                <SubMenuModelsBackgroundStyle>
                    <SubmenuContainerStyle>

                        <SubmenuRowContainerStyle>
                            <SubmenuOptionStyle to="/female" activeStyle={{ fontFamily: "Gotham-Black" }} >Female</SubmenuOptionStyle>
                            <SubmenuLineContainerStyle>
                                <SubmenuLineStyle active={this.props.activeFemaleState}></SubmenuLineStyle>
                            </SubmenuLineContainerStyle>
                            <SubmenuFilterContainerStyle active={this.props.activeFemaleState}>
                                <SubmenuFilterOptionStyle to="/female" exact activeStyle={{ fontFamily: "Gotham-Black" }} >All</SubmenuFilterOptionStyle> |{" "}
                                <SubmenuFilterOptionStyle to="#" activeStyle={{ fontFamily: "Gotham-Black" }} >Mainboard</SubmenuFilterOptionStyle>  |{" "}
                                <SubmenuFilterOptionStyle to="/female/new-faces" activeStyle={{ fontFamily: "Gotham-Black" }}>New Faces</SubmenuFilterOptionStyle> |{" "} 
                                <SubmenuFilterOptionStyle to="/female/curvy" activeStyle={{ fontFamily: "Gotham-Black" }} >Curvy</SubmenuFilterOptionStyle> |{" "}
                                <SubmenuFilterOptionStyle to="/female/women" activeStyle={{ fontFamily: "Gotham-Black" }} >Women</SubmenuFilterOptionStyle>
                            </SubmenuFilterContainerStyle>
                        </SubmenuRowContainerStyle>

                        <SubmenuRowContainerStyle>
                            <SubmenuOptionStyle to="/male" activeStyle={{ fontFamily: "Gotham-Black" }} >Male</SubmenuOptionStyle>
                            <SubmenuLineContainerStyle>
                                <SubmenuLineStyle active={this.props.activeMaleState}></SubmenuLineStyle>
                            </SubmenuLineContainerStyle>
                            <SubmenuFilterContainerStyle active={this.props.activeMaleState}>
                                <SubmenuFilterOptionStyle to="/male" exact activeStyle={{ fontFamily: "Gotham-Black" }} >All</SubmenuFilterOptionStyle> |{" "}
                                <SubmenuFilterOptionStyle to="#" activeStyle={{ fontFamily: "Gotham-Black" }} >Mainboard</SubmenuFilterOptionStyle> |{" "}
                                <SubmenuFilterOptionStyle to="/male/new-faces" activeStyle={{ fontFamily: "Gotham-Black" }} >New Faces</SubmenuFilterOptionStyle> |{" "}
                                <SubmenuFilterOptionStyle to="/male/curvy" activeStyle={{ fontFamily: "Gotham-Black" }} >Curvy</SubmenuFilterOptionStyle> |{" "}
                                <SubmenuFilterOptionStyle to="/male/men" activeStyle={{ fontFamily: "Gotham-Black" }} >Men</SubmenuFilterOptionStyle>
                            </SubmenuFilterContainerStyle>
                        </SubmenuRowContainerStyle>
                                
                    </SubmenuContainerStyle>
                </SubMenuModelsBackgroundStyle>
            </Fragment>
        );
    }
}


//Export
export default SubMenuModelsGrid;