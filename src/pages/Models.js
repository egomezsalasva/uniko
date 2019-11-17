//Library Imports
import React from 'react'
import styled from 'styled-components'
import { Route } from 'react-router-dom'
//Style Imports
import * as sharedStyles from '../data/sharedStyles'
//Component Imports
import SubMenuModelsGrid from '../components/models/SubMenuModelGrid'
import ModelGridFemaleAll from '../components/models/ModelGridFemaleAll'
import ModelGridMaleAll from '../components/models/ModelGridMaleAll'
import FooterFrame from '../components/models/FooterFrame'

//Styles
const ModelsStyle = styled.div`
    width: 100vw;
    min-height: 100vh;
    background: ${sharedStyles.unikoGrey};
`

//Main Component
function Models() {
    return (
        <>
        <ModelsStyle>
            {/* <SubMenuModelsGrid /> */}
            <Route path={"/female"} component={ModelGridFemaleAll} />
            <Route path={"/male"} component={ModelGridMaleAll} />
            {/* <FooterFrame /> */}
        </ModelsStyle>
        </>
    );
}


//Export
export default Models;
