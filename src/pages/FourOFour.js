//Library Imports
import React, {Component, Fragment} from 'react'
import styled from 'styled-components'
//Style Imports
import * as sharedStyles from '../data/sharedStyles'
//Image Imports
import Icon404 from '../assets/logos&icons/404.svg'


//Styles
const container404Style = styled.div`
    background: ${sharedStyles.unikoWhite};
    width: 100vw;
    height: 100vh;
`
const Icon404Style = styled.img`
    position: absolute;
    transform: scale(0.75);
`

//Main Component
class FourOFour extends Component {
    render(){
        return (
            <Fragment>
                <container404Style>
                    <Icon404Style src={Icon404} />
                </container404Style>
            </Fragment>
        );
    }
}


//Export
export default FourOFour;