//Library Imports
import React, { useState, useEffect,  useRef } from 'react'
import { useParams, Link } from "react-router-dom"
import styled from 'styled-components'
import { TimelineMax } from 'gsap/all'
import find from 'find'
//Style Imports
import * as sharedStyles from '../data/sharedStyles'
//Data Imports
import MODEL_DB from '../data/MODEL_DB'
//Component Import
import LogoBlack from '../components/header/logo/LogoBlack'
//Image Import
import arrowSlider from '../assets/logos&icons/arrowSliderModels.svg'

//Styles
const InnerModelsContainerStyle = styled.div`
    width: 100vw;
    min-height: 100vh;
    background: ${sharedStyles.unikoGrey};
`
const ModelInfoContainerStyle = styled.div`
    position: absolute;
    width: ${sharedStyles.w410px};
    top: ${sharedStyles.h230px};
    left: ${sharedStyles.w70px};
`
const ModelNameContainerStyle = styled.div`
    position: relative;
    top: 0;
    left: 0;
`
const ModelNameStyle = styled.h2`
    text-transform: uppercase;
    font-family: 'Gotham-Black';
    font-size: 42px;
    color: ${sharedStyles.unikoBlack};
    letter-spacing: 1px;
    line-height: 40px;
    margin-bottom: 5px;
`
const ModelSurnameStyle = styled.h2`
    text-transform: uppercase;
    font-family: 'Gotham-Black';
    font-size: 42px;
    color: ${sharedStyles.unikoBlack};
    letter-spacing: 1px;
    line-height: 40px;
`
const InstagramLinkStyle = styled.a`
    position: relative;
    top: ${sharedStyles.h20px};
    font-family: 'Gotham-Black';
    font-size: 22px;
    color: ${sharedStyles.unikoBlack};
    letter-spacing: 0.52px;
    text-decoration: ${ props => props.instagramState == null ? 'line-through' : 'none'};
    opacity: ${ props => props.instagramState == null ? 0 : 1};
`
const ModelTableStyle = styled.table`
    position: relative;
    top: ${sharedStyles.h60px};  
    margin-bottom: ${sharedStyles.h30px};
`
const TableRowStyle = styled.tr`
    height: 24px;    
`
const TableKeyStyle = styled.td`
    //width: ${sharedStyles.w90px};
    width: 90px;
    font-family: 'Gotham-Light';
      
`
const TableValueStyle = styled.td`
    width: ${sharedStyles.w260px};  
    font-family: 'Gotham-Black';
    font-size: 18px;
    color: ${sharedStyles.unikoBlack};
    letter-spacing: 0;   
`
const MediaOptionsContainerStyle = styled.div`
    position: relative;
    top: ${sharedStyles.h90px};
    left: 0; 
`
const MediaOptionStyle = styled(Link)`
    display: inline-block;
    margin-right: ${sharedStyles.w20px};
    font-family: 'Gotham-Black';
    font-size: 22px;
    color: ${ props => props.active ? sharedStyles.unikoBlack : sharedStyles.unikoWhite };
    letter-spacing: 1px;
    text-transform: uppercase;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: ${sharedStyles.unikoBlack};
    text-decoration: none;
`
const ModelSlideshowContainerStyle = styled.div`
    position: absolute;
    /* top: ${sharedStyles.h130px}; */
    top: ${sharedStyles.h120px};
    right: ${sharedStyles.w70px};
    right: ${sharedStyles.w50px};
    width: calc(${sharedStyles.w445px} * 2);
    height: ${sharedStyles.h618px};
    /* background: red; */
    overflow: hidden;
`
const ModelSliderImage = styled.img`
    position: absolute;
    width: ${sharedStyles.w445px};
    height: ${sharedStyles.h618px};
    background: ${sharedStyles.unikoPlaceholderBoxGrey};
    object-fit: cover;
    object-position: center;
`
// const ModelPrevImage = styled(ModelSliderImage)`
//     display: inline-block;
//     position: absolute;
//     left: -30.9027778vw;
// `
const ModelLeftImage = styled(ModelSliderImage)`
    left: 0;
`
const ModelRightImage = styled(ModelSliderImage)`
    right: 0;
`
// const ModelNextImage = styled(ModelSliderImage)`
//     right: -30.9027778vw;
// `
const ArrowNextSlider = styled.img`
    position: absolute;
    top: 50%;
    right: 40px;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 1100;
`
const ArrowPrevSlider = styled.img`
    position: absolute;
    top: 50%;
    left: 40px;
    transform: translateY(-50%) rotate(180deg);
    cursor: pointer;
    z-index: 1100;
`


//Main Component
function InnerModels(props) {

    //Get name from URL
    let { modelUrlId } = useParams();

    // Find current model that matches the url 
    const CURRENT_MODEL = MODEL_DB.filter( model => {
        return model.linkName === modelUrlId
    })

    // Result is a one item list so get the first item 
    const CURRENT_MODEL_SELEC = CURRENT_MODEL[0]

    // Assign variables to model data
    const MODEL_NAME = CURRENT_MODEL_SELEC.firstName
    const MODEL_SURNAME = CURRENT_MODEL_SELEC.surname
    const MODEL_INSTAGRAM = CURRENT_MODEL_SELEC.instagramLink
    const MODEL_HEIGHT = CURRENT_MODEL_SELEC.height
    const MODEL_BUST = CURRENT_MODEL_SELEC.bust
    const MODEL_WAIST = CURRENT_MODEL_SELEC.waist
    const MODEL_HIPS = CURRENT_MODEL_SELEC.hip
    const MODEL_SHOES = CURRENT_MODEL_SELEC.shoe
    const MODEL_EYES = CURRENT_MODEL_SELEC.eyeColour
    const MODEL_HAIR = CURRENT_MODEL_SELEC.hairColour

    const MODEL_SRC = CURRENT_MODEL_SELEC.linkName


    // Make state for model instagram to assign styling in Styled Component
    const [ modelInstagram ] = useState(MODEL_INSTAGRAM);

    //SLIDER 

    find.file(`../assets/images/models//alicia-herrenriech/agency`, function(files) {
        console.log(files.length);
    })



    const sliderPhotosList = [
        require(`../assets/images/models/${MODEL_SRC}/agency/0@2x.jpg`),
        require(`../assets/images/models/${MODEL_SRC}/agency/1@2x.jpg`),
        require(`../assets/images/models/${MODEL_SRC}/agency/2@2x.jpg`),
        // require(`../assets/images/models/${MODEL_SRC}/agency/3@2x.jpg`),
        // require(`../assets/images/models/${MODEL_SRC}/agency/4@2x.jpg`),
        // require(`../assets/images/models/${MODEL_SRC}/agency/5@2x.jpg`),
    ]

    const [slideLeftIndex, setSlideLeftIndex] = useState(0)
    const [slideRightIndex, setSlideRightIndex] = useState(1)

    // reference to the DOM node
    let leftImageRef = useRef(null)
    let rightImageRef = useRef(null)

    // Initialize to the animation
    const [nextSlideTween] = useState(new TimelineMax({ paused: true, reversed: true }))

    //Animation
    useEffect( () => {
        // nextSlideTween.to( leftImageRef, 0.4, { opacity: 0 } )
        // nextSlideTween.to( leftImageRef, 0.4, { opacity: 1 })
        // nextSlideTween.to( rightImageRef, 0.4, { opacity: 0 } )
        // nextSlideTween.to( rightImageRef, 0.4, { opacity: 1 })
        // nextSlideTween.to( rightImageRef, 0.4, {zIndex: 1000, x: "-30.9027778vw"} )
        // nextSlideTween.to( nextImageRef, 0.4, { x: "-30.9027778vw"}, "-=0.4" )
    }, [nextSlideTween])

    const changeSrcNext = () => {
        if ( slideLeftIndex < ( sliderPhotosList.length - 1 ) ) {
            setSlideLeftIndex( slideLeftIndex + 1 )
            leftImageRef.src = sliderPhotosList[slideLeftIndex]
        }
        if ( slideRightIndex < ( sliderPhotosList.length - 1 ) ) {
            setSlideRightIndex( slideRightIndex + 1 )
            rightImageRef.src = sliderPhotosList[slideRightIndex]
        }
         //If it reaches end of array restart
        if ( slideLeftIndex === ( sliderPhotosList.length - 1 ) ){
            setSlideLeftIndex(0)
        }
        if ( slideRightIndex === ( sliderPhotosList.length - 1 ) ){
            setSlideRightIndex(0)
        }
    }

    const changeSrcPrev = () => {
        if ( slideLeftIndex > 0 ) {
            setSlideLeftIndex( slideLeftIndex - 1 )
            leftImageRef.src = sliderPhotosList[slideLeftIndex]
        }
        if ( slideRightIndex > 0 ) {
            setSlideRightIndex( slideRightIndex - 1 )
            rightImageRef.src = sliderPhotosList[slideRightIndex]
        }
         //If it reaches end of array restart
        if ( slideLeftIndex === 0 ){
            setSlideLeftIndex( sliderPhotosList.length - 1 )
        }
        if ( slideRightIndex === 0 ){
            setSlideRightIndex( sliderPhotosList.length - 1 )
        }
    }

    const nextSlideClickHandler = async () => {
        nextSlideTween.play()
        changeSrcNext()
    }

    const prevSlideClickHandler = () => {

        changeSrcPrev()
    }

    

    return (
        <>
        <InnerModelsContainerStyle>
            <LogoBlack />

            <ModelInfoContainerStyle>

                <ModelNameContainerStyle>
                    <ModelNameStyle>{MODEL_NAME}</ModelNameStyle>
                    <ModelSurnameStyle>{MODEL_SURNAME}</ModelSurnameStyle>
                </ModelNameContainerStyle>

                <InstagramLinkStyle href={MODEL_INSTAGRAM} target="_blank" instagramState={ modelInstagram } >Instagram</InstagramLinkStyle>

                <ModelTableStyle>
                    <tbody>
                        <TableRowStyle>
                            <TableKeyStyle>Altura</TableKeyStyle>
                            {/* Transfrom CM to M  && CM to FOOT */}
                            <TableValueStyle>{ (MODEL_HEIGHT / 100)} | {( MODEL_HEIGHT/ 30.48 ).toFixed(1) + ' ”' }</TableValueStyle>
                        </TableRowStyle>
                        <TableRowStyle>
                            <TableKeyStyle>Bust</TableKeyStyle>
                            <TableValueStyle>{MODEL_BUST}</TableValueStyle>
                        </TableRowStyle>
                        <TableRowStyle>
                            <TableKeyStyle>Waist</TableKeyStyle>
                            <TableValueStyle>{MODEL_WAIST}</TableValueStyle>
                        </TableRowStyle>
                        <TableRowStyle>
                            <TableKeyStyle>Hips</TableKeyStyle>
                            <TableValueStyle>{MODEL_HIPS}</TableValueStyle>
                        </TableRowStyle>
                        <TableRowStyle>
                            <TableKeyStyle>Shoes</TableKeyStyle>
                            {/* 31 for women only! */}
                            <TableValueStyle>{MODEL_SHOES} | {(MODEL_SHOES - 31)}</TableValueStyle>
                        </TableRowStyle>
                        <TableRowStyle>
                            <TableKeyStyle>Eyes</TableKeyStyle>
                            <TableValueStyle>{MODEL_EYES}</TableValueStyle>
                        </TableRowStyle>
                        <TableRowStyle>
                            <TableKeyStyle>Hair</TableKeyStyle>
                            <TableValueStyle>{MODEL_HAIR}</TableValueStyle>
                        </TableRowStyle>
                    </tbody>
                </ModelTableStyle>

                <MediaOptionsContainerStyle>
                    <MediaOptionStyle active="true" to="#" >Book</MediaOptionStyle>
                    <MediaOptionStyle to="#" >Polaroids</MediaOptionStyle>
                    <MediaOptionStyle to="#" >Video</MediaOptionStyle>
                </MediaOptionsContainerStyle>

            </ModelInfoContainerStyle>

            <ModelSlideshowContainerStyle>
                {/* <ModelPrevImage src={require("../assets/images/models/alicia-herrenriech/agency/0@2x.jpg")} ref={ div => {prevImageRef = div} } /> */}
                <ModelLeftImage src={require(`../assets/images/models/${MODEL_SRC}/agency/${slideLeftIndex}@2x.jpg`)} ref={ img => {leftImageRef = img} } />
                <ModelRightImage src={require(`../assets/images/models/${MODEL_SRC}/agency/${slideRightIndex}@2x.jpg`)} ref={ div => {rightImageRef = div} } />
                {/* <ModelNextImage src={require(`../assets/images/models/alicia-herrenriech/agency/${slideIndex + 2}@2x.jpg`)} ref={ div => {nextImageRef = div} } /> */}

                <ArrowNextSlider src={arrowSlider} onClick={ nextSlideClickHandler }/>
                <ArrowPrevSlider src={arrowSlider} onClick={ prevSlideClickHandler }/>
            </ModelSlideshowContainerStyle>
            
            

        </InnerModelsContainerStyle>
        </>
    );
}


//Export
export default InnerModels;
