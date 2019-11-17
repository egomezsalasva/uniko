//Library Imports
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
//Style Imports
import * as sharedStyles from '../../data/sharedStyles'
//Data Imports
import MODEL_DB from '../../data/MODEL_DB'
//Component Imports
import LogoBlack from '../header/logo/LogoBlack'
import SubMenuModelsGrid from './SubMenuModelGrid'
import FooterFrame from './FooterFrame'


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
const ModelCardStyle = styled(Link)`
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
    text-transform: uppercase;
`



//Main Component
function ModelGridFemaleAll() {

    let MODEL_DB_FEMALE_ALL = MODEL_DB.filter( model => {
        return model.gender === "female"
    })

    return (
        <>
        <LogoBlack />
        <SubMenuModelsGrid activeFemaleState="true" />
        <ModelGridStyle>
            {MODEL_DB_FEMALE_ALL.map( (model, i) => {
                // const whiteSpaceRegEx = / /g;
                // let modelSrc = model.name.replace(whiteSpaceRegEx, "-").toLowerCase()
                let MODEL_LINKNAME = model.linkName
                // const firstName = model.name.split(" ")[0]
                const MODEL_NAME = model.firstName
                // const surName = model.name.split(" ").slice(1).join(' ')
                const MODEL_SURNAME = model.surname
                return (
                    <ModelCardStyle key={i} to={`/models/${MODEL_LINKNAME}`}>
                        <ModelNameCardStyle>{MODEL_NAME}<br/>{MODEL_SURNAME}</ModelNameCardStyle>
                        <ImageCardStyle 
                            src= {require(`../../assets/images/models/${MODEL_LINKNAME}/profile/0@2x.jpg`)}
                            alt = "Profile Image"
                        />
                    </ModelCardStyle>
                )
            })}
        </ModelGridStyle>
        <FooterFrame />
        </>
    )
}


//Export
export default ModelGridFemaleAll;




    