//Library Imports
import React, {Component, Fragment} from 'react'
import styled from 'styled-components'
//Style Imports
import * as sharedStyles from '../../data/sharedStyles'

//Styles
const SubMenuModelsBackgroundStyle = styled.div`
    position: fixed;
    background: red;
    width: ${sharedStyles.w1360px};
    height: ${sharedStyles.h110px};
    left: ${sharedStyles.w40px};
    top: ${sharedStyles.h80px};
`

//Main Component
class SubMenuModelsGrid extends Component {
    render(){
        return (
            <Fragment>
                <SubMenuModelsBackgroundStyle>
                    
                </SubMenuModelsBackgroundStyle>
            </Fragment>
        );
    }
}


//Export
export default SubMenuModelsGrid;