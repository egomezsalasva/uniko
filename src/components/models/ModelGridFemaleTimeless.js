//Library Imports
import React, { Component } from 'react'
import styled from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component'
//Style Imports
import * as sharedStyles from '../../data/sharedStyles'
//Data Imports
import MODEL_DB from '../../data/MODEL_DB'
import SubMenuModelsGrid from './SubMenuModelGrid'
//Component Imports
import LogoBlack from '../header/logo/LogoBlack'


const ModelGridStyle = styled.div`
    position: relative;
    top: calc(${sharedStyles.h210px} - 20px);
    left: ${sharedStyles.w40px};
    width: ${sharedStyles.w1360px};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 60px;
`
const ModelCardStyle = styled.div`
    //width: 315px;
    //width: 300px;
    width: 308px;
    //height: 400px;
    height: 390px;
    background: ${sharedStyles.unikoPlaceholderBoxGrey};
    //margin: 0 10px 20px;
    margin: 0 15px 30px;
`
const ImageCardStyle = styled(LazyLoadImage)`
    width: 100%;
    height: 100%;
`
const ModelNameCardStyle = styled.h3`
    position: absolute;
    width: 315px;
    text-align: center;
    display: inline-block;
    //margin-top: 334px;
    margin-top: 324px;
    color: ${sharedStyles.unikoWhite};
    font-family: "Gotham-Black";
    font-size: 24px;
    /* -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${sharedStyles.unikoBlack}; */
    text-transform: uppercase;
`



//Main Component
class ModelGridFemaleTimeless extends Component {
    render(){

        let MODEL_DB_FEMALE_ALL = MODEL_DB.filter( model => {
            return model.gender === "female"
        })

        let MODEL_DB_FEMALE_TIMELESS = MODEL_DB_FEMALE_ALL.filter( model => {
            return model.timeless === true
        })

        return (
            <>
            <LogoBlack />
            <SubMenuModelsGrid activeFemaleState="true" />
            <ModelGridStyle>
                {MODEL_DB_FEMALE_TIMELESS.map( (model, i) => {
                    const whiteSpaceRegEx = / /g;
                    let modelSrc = model.name.replace(whiteSpaceRegEx, "-").toLowerCase()
                    const firstName = model.name.split(" ")[0]
                    const surName = model.name.split(" ").slice(1).join(' ')
                    return (
                        <ModelCardStyle key={i}>
                            <ModelNameCardStyle>{firstName}<br/>{surName}</ModelNameCardStyle>
                            <ImageCardStyle 
                                src= {require(`../../assets/images/models/${modelSrc}/profile/0@2x.jpg`)}
                                alt = "Profile Image"
                            />
                        </ModelCardStyle>
                    )
                })}
            </ModelGridStyle>
            </>
        );
    }
}


//Export
export default ModelGridFemaleTimeless;




    