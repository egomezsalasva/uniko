//Library Imports
import React, {Component, Fragment} from 'react'
import styled from 'styled-components'
//Style Imports
import * as sharedStyles from '../data/sharedStyles'
//Image Imports
import logoBlack from '../assets/logos&icons/logoBlack.svg'
import logoWhiteBorder from '../assets/logos&icons/logoWhiteBorder.svg'
//Component Imports
import SubMenuModelsGrid from '../components/models/SubMenuModelGrid'

const ModelsStyle = styled.div`
    width: 100vw;
    min-height: 100vh;
    background: ${sharedStyles.unikoGrey};
`
const BlackLogoStyle = styled.img`
    position: fixed;
    left: ${sharedStyles.w40px};
    top: ${sharedStyles.h30px};
    z-index: 1700;
`
const LogoStyle = styled.img`
    position: fixed;
    left: ${sharedStyles.w40px};
    top: ${sharedStyles.h30px};
    z-index: 1600;
`

//Main Component
class Models extends Component {
    render(){
        return (
            <Fragment>
                { this.props.logoToggle ? <BlackLogoStyle src={logoBlack} /> :  <LogoStyle src={logoWhiteBorder} /> }
                <ModelsStyle>
                    <SubMenuModelsGrid />
                </ModelsStyle>

            </Fragment>
        );
    }
}


//Export
export default Models;

//Link to photo
//{`assets/images/models/${model.name.replace(whiteSpaceRegEx, "-").toLowerCase()}/profile/${index}.jpg`}