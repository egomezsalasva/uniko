//Library Imports
import React, {Component, Fragment} from 'react'
import styled from 'styled-components'
import { TimelineMax } from 'gsap/all'
//Style Imports
import * as sharedStyles from '../../../data/sharedStyles'
//Image Imports
import photoModelHero01 from '../../../assets/images/heroSlideshow/photoModelHero01@2x.jpg'
import photoModelHero02 from '../../../assets/images/heroSlideshow/photoModelHero02@2x.jpg'
import photoModelHero03 from '../../../assets/images/heroSlideshow/photoModelHero03@2x.jpg'
import photoModelHero04 from '../../../assets/images/heroSlideshow/photoModelHero04@2x.jpg'
import photoModelHero05 from '../../../assets/images/heroSlideshow/photoModelHero05@2x.jpg'
import photoPressHero01 from '../../../assets/images/heroSlideshow/photoPressHero01@2x.jpg'
import photoPressHero02 from '../../../assets/images/heroSlideshow/photoPressHero02@2x.jpg'
import photoPressHero03 from '../../../assets/images/heroSlideshow/photoPressHero03@2x.jpg'
import photoPressHero04 from '../../../assets/images/heroSlideshow/photoPressHero04@2x.jpg'
import photoPressHero05 from '../../../assets/images/heroSlideshow/photoPressHero05@2x.jpg'


//Styles
const HeroModelsContainerStyle = styled.a`
    position: absolute;
    width: 50vw;
    height: 100vh;
    top: 0;
    left: 0;
    bottom: 0;
    cursor: pointer;
`
const HeroModelsImageStyle = styled.img`
    position: absolute;
    width: 50vw;
    height: 100vh;
    object-fit: cover;
`
const HeroModelsTitleStyle = styled.h2`
    position: absolute;
    bottom: ${sharedStyles.h40px};
    right: ${sharedStyles.w40px};
    font-family: "GothamBlack";
    font-size: 50px;
    line-height: 50px;
    color: rgba(252,252,252,0);
    text-transform: uppercase;
    letter-spacing: 2px;
    transform: rotate(-90deg) translate( 225.5px, -40px); // calc(width of box - height of box)
    transform-origin: right top;
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: ${sharedStyles.unikoWhite};
`
const HeroPressContainerStyle = styled.a`
    position: absolute;
    width: 50vw;
    height: 100vh;
    top: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;
`
const HeroPressImageStyle = styled.img`
    position: absolute;
    width: 50vw;
    height: 100vh;
    object-fit: cover;
    border-top: ${sharedStyles.h120px} solid ${sharedStyles.unikoGrey};
    border-bottom: ${sharedStyles.h120px} solid ${sharedStyles.unikoGrey};
    border-left: ${sharedStyles.w120px} solid ${sharedStyles.unikoGrey};
    border-right: ${sharedStyles.w150px} solid ${sharedStyles.unikoGrey};
`
const HeroPressTitleStyle = styled.h2`
    position: absolute;
    bottom: ${sharedStyles.h40px};
    right: ${sharedStyles.w40px};
    font-family: "GothamBlack";
    font-size: 50px;
    line-height: 50px;
    //color: rgba(252,252,252,0);
    color: rgba(3,3,3,0);
    text-transform: uppercase;
    letter-spacing: 2px;
    transform: rotate(-90deg) translate( 221.36px, -40px); // calc(width of box - height of box)
    transform-origin: right top;
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: ${sharedStyles.unikoBlack};
`

//Data
const slideshowModelsImageList = [

    photoModelHero01,
    photoModelHero02,
    photoModelHero03,
    photoModelHero04,
    photoModelHero05,
    
]

const slideshowPressImageList = [
    photoPressHero01,
    photoPressHero02,
    photoPressHero03,
    photoPressHero04,
    photoPressHero05,
]

//Variables
//Initialize Counters
let indexOfModelImages = 1
let mouseCounterModel = 0
let indexOfPressImages = 1
let mouseCounterPress = 0


//Main Component
class HeroHomeSlideshow extends Component {

    constructor(props){
        super(props);
        // reference to the DOM node
        this.heroModelsTitleRef = null
        this.heroPressTitleRef = null
        // reference to the animation
        this.heroModelsTween = null
        this.heroPressTween = null
    }


    componentDidMount(){

        this.heroModelsTween = new TimelineMax({ paused: true, reversed: true })
            this.heroModelsTween.to( this.heroModelsTitleRef, 0.4, { color: "rgba(252,252,252,1)" } )
        
        this.heroPressTween = new TimelineMax({ paused: true, reversed: true })
            this.heroPressTween.to( this.heroPressTitleRef, 0.4, { color:  "rgba(3,3,3,1)" } )

    }


    slideModelsImage = () => {
        //Track Pixels moved by mouse
        mouseCounterModel ++
        //Every X pixels change image and dimensions - When it reaches 50 initialize(for loop could work) 
        if( mouseCounterModel > 20 ){
            // artworkImage.className = `artworkImage ${artworkImageList[indexOfArtworkImages].ratio}`
            this.heroModelsImageRef.src = slideshowModelsImageList[indexOfModelImages]
            //Initialize when reached to 50px
            mouseCounterModel = 0
            //Pass to next image in array
            if ( indexOfModelImages < slideshowModelsImageList.length ) {
                indexOfModelImages ++
            }
        }
        //If it reaches end of array restart
        if ( indexOfModelImages === slideshowModelsImageList.length ){
            indexOfModelImages = 0
        }
    }


    slidePressImage = () => {
        //Track Pixels moved by mouse
        mouseCounterPress ++
        //Every X pixels change image and dimensions - When it reaches 50 initialize(for loop could work) 
        if( mouseCounterPress > 15 ){
            // artworkImage.className = `artworkImage ${artworkImageList[indexOfArtworkImages].ratio}`
            this.heroPressImageRef.src = slideshowPressImageList[indexOfPressImages]
            //Initialize when reached to 50px
            mouseCounterPress = 0
            //Pass to next image in array
            if ( indexOfPressImages < slideshowPressImageList.length ) {
                indexOfPressImages ++
            }
        }
        //If it reaches end of array restart
        if ( indexOfPressImages === slideshowPressImageList.length ){
            indexOfPressImages = 0
        }
    }


    render(){
        return (
            <Fragment>
                <HeroModelsContainerStyle 
                    onMouseEnter = { () => { this.heroModelsTween.play()} }
                    onMouseLeave = { () => { this.heroModelsTween.reverse()}}  
                    href="#models"
                >
                    <HeroModelsImageStyle 
                        src={photoModelHero01} 
                        ref={ div => this.heroModelsImageRef = div } 
                        onMouseMove={this.slideModelsImage}
                    />
                    <HeroModelsTitleStyle ref={div => this.heroModelsTitleRef = div} >Modelos</HeroModelsTitleStyle>
                </HeroModelsContainerStyle>

                <HeroPressContainerStyle 
                    onMouseEnter = { () => { this.heroPressTween.play()} }
                    onMouseLeave = { () => { this.heroPressTween.reverse()}} 
                    href="#press"
                >
                    <HeroPressImageStyle 
                        src={photoPressHero01} 
                        ref={ div => this.heroPressImageRef = div } 
                        onMouseMove={this.slidePressImage}
                    />
                    <HeroPressTitleStyle ref={div => this.heroPressTitleRef = div} >Noticias</HeroPressTitleStyle>
                </HeroPressContainerStyle>
            </Fragment>
        );
    }
}

//Exports
export default HeroHomeSlideshow;
