//Library Imports
import React, {Component, Fragment} from 'react'
import styled from 'styled-components'
//Style Imports
//import * as sharedStyles from '../../data/sharedStyles'


//Styles
const ModelCardStyle = styled.div`
    width: 315px;
    height: 400px;
    background: lightgrey;
    margin: 0 10px 20px;
`
const ImageCardStyle = styled.img`
    width: 100%;
    height: 100%;
`

//Main Component
class ModelCard extends Component {
    render(){
        return (
            <Fragment>
                <ModelCardStyle>
                    <ImageCardStyle src={this.props.modelSrc} alt = ""/>
                </ModelCardStyle>
            </Fragment>
        );
    }
}


//Export
export default ModelCard;