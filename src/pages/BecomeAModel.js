//Library Imports
import React from 'react'
import styled from 'styled-components'
//Style Imports
import * as sharedStyles from '../data/sharedStyles'
//Component Imports
import LogoBlack from '../components/header/logo/LogoBlack'
import BecomeAModelInfo from '../components/becomeAModel/BecomeAModelInfo'
import BecomeAModelForm from '../components/becomeAModel/BecomeAModelForm'


//Styles
const BecomeAModelContainerStyle = styled.div`
    width: 100vw;
    min-height: 100vh;
    background: ${sharedStyles.unikoGrey};
`

//Main Component
function BecomeAModel() {
    return (
        <BecomeAModelContainerStyle>
            <LogoBlack />
            <BecomeAModelInfo />
            <BecomeAModelForm />
        </BecomeAModelContainerStyle>
    );
}


//Export
export default BecomeAModel;

//Link to photo
//{`assets/images/models/${model.name.replace(whiteSpaceRegEx, "-").toLowerCase()}/profile/${index}.jpg`}