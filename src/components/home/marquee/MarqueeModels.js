//Library Imports
import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { TimelineMax, TweenLite, Linear } from 'gsap/all'
//Component Imports
import MarqueePlus from './MarqueePlus'
//Style Imports
import * as sharedStyles from '../../../data/sharedStyles'


//Data
const data = [
    {
        name: "Abby Harris",
        link: "#Abby Harris",
        id: "01",
    },
    {
        name: "Adam Eyer",
        link: "#Name Two",
        id: "02",
    },
    {
        name: "Adrianna Barbarewicz",
        link: "#Barbarewicz",
        id: "03",
    },
    {
        name: "Afra Van Ooijen",
        link: "#fra Van Ooijen",
        id: "04",
    },
    {
        name: "Akin Victor",
        link: "#",
        id: "05",
    },
    {
        name: "Alex Guinot",
        link: "#",
        id: "06",
    },
    {
        name: "Alex Ko",
        link: "#",
        id: "07",
    },
    {
        name: "Alina Krasina",
        link: "#",
        id: "08",
    },
    {
        name: "Amaka Enem",
        link: "#",
        id: "09",
    },
    {
        name: "Anastasia Jovanovic",
        link: "#",
        id: "10",
    },
    {
        name: "Anastasia Saprikina",
        link: "#",
        id: "11",
    },
    {
        name: "Anastasija Gavrjusenko",
        link: "#",
        id: "12",
    },
    {
        name: "Andrea Diaz",
        link: "#",
        id: "13",
    },
    {
        name: "Angela Kajo",
        link: "#",
        id: "14",
    },
    {
        name: "Aniko Michnyaova",
        link: "#",
        id: "15",
    },
    {
        name: "Anna-Christina Schwartz",
        link: "#",
        id: "16",
    },
    {
        name: "Annegrietje Franssen",
        link: "#",
        id: "17",
    },
    {
        name: "Annewil Hokken",
        link: "#",
        id: "18",
    },
    {
        name: "Anthony To",
        link: "#",
        id: "19",
    },
    {
        name: "Aurelien Marinangeli",
        link: "#",
        id: "20",
    },
    {
        name: "Axel Swan",
        link: "#",
        id: "21",
    },
    {
        name: "Bob Van Der Hoek",
        link: "#",
        id: "22",
    },
    {
        name: "Brian Lachenal",
        link: "#",
        id: "23",
    },
    {
        name: "Balthazar Kloppers",
        link: "#",
        id: "24",
    },
    {
        name: "Benjamin Kuhnemund",
        link: "#",
        id: "25",
    },
    {
        name: "Blazej Kutyla",
        link: "#",
        id: "26",
    },
    {
        name: "Bob Van Der Hoek",
        link: "#",
        id: "27",
    },
    {
        name: "Brian Lachenal",
        link: "#",
        id: "28",
    },
    {
        name: "Cami Ferreyro",
        link: "#",
        id: "29",
    },
    {
        name: "Camila Giovagnol",
        link: "#",
        id: "30",
    },
    {
        name: "Camille Gross",
        link: "#",
        id: "31",
    },
    {
        name: "Candide Rietdijk",
        link: "#",
        id: "32",
    },
    {
        name: "Carles Fiestas",
        link: "#",
        id: "033,"
    },
    {
        name: "Carolina Barcelona",
        link: "#",
        id: "34",
    },
    {
        name: "Christian Canovas",
        link: "#",
        id: "35",
    },
    {
        name: "Christian Peters",
        link: "#",
        id: "36",
    },
    {
        name: "Christina Rasputin",
        link: "#",
        id: "37",
    },
    {
        name: "Christine Beutmann",
        link: "#",
        id: "38",
    },
    {
        name: "Circe De La Rosa",
        link: "#",
        id: "39",
    },
    {
        name: "Claire Romain",
        link: "#",
        id: "40",
    },
    {
        name: "Christine Beutmann",
        link: "#",
        id: "41",
    },
    {
        name: "Circe De La Rosa",
        link: "#",
        id: "42",
    },
    {
        name: "Claire Romain",
        link: "#",
        id: "43",
    },
    {
        name: "Claudia Szeglat",
        link: "#",
        id: "44",
    },
    {
        name: "Connie Robinson",
        link: "#",
        id: "45",
    },
    {
        name: "Corentin Huon",
        link: "#",
        id: "46",
    },
    {
        name: "Corina Kuhar",
        link: "#",
        id: "47",
    },
    {
        name: "Cristina Guillen",
        link: "#",
        id: "48",
    },
    {
        name: "Daan Disseldorp",
        link: "#",
        id: "49",
    },
    {
        name: "Dane Goodwin",
        link: "#",
        id: "50",
    },
    {
        name: "Danielle Van Dam",
        link: "#",
        id: "51",
    },
    {
        name: "Daphne Kooy",
        link: "#",
        id: "52",
    },
    {
        name: "Daria Markova",
        link: "#",
        id: "53",
    },

];
//Variables
const WIDTH = 150;
const DURATION = data.length * 1.8;
const marqueeSlideAnim = new TimelineMax({ repeat: -1 });
//Function
//FIX COPY ARRAY INSTEAD OF MUTING
const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
}
shuffle(data)


//Styles
const MarqueeBoxStyle = styled.div`
    //Position
    position: absolute;
    top: calc(${ sharedStyles.h30px} + 65px);
    left: ${sharedStyles.w40px};
    overflow: hidden;
    //Dimensions
    width: 400px;
    height 36px;
    //Colors
    background: ${sharedStyles.unikoBlack};
    //Text
    text-align: center;
    //FIX WITH DIV
    border-left: 10px solid ${sharedStyles.unikoBlack};
    border-right: 10px solid ${sharedStyles.unikoBlack};
    z-index: 500;
`
const MarqueeTextStyle = styled.div`
    position: absolute;
    left: 20px;
    right: 20px;
    width: ${data.length * WIDTH }px;
    height: 36px;
`
const MarqueeLinkStyle = styled.a`
    overflow: hidden;
    color: ${sharedStyles.unikoWhite};
    line-height: 36px;
    font-family: "PlayfairDisplay-Italic";
    font-size: 18px;
    letter-spacing: 0.9px; 
    text-decoration: none; 
    
`
const MarqueeBoxShadowStyle = styled.div`
    position: absolute;
    top: calc(${ sharedStyles.h30px} + 65px);
    left: ${sharedStyles.w40px};
    width: 400px;
    height 36px;
    background: ${sharedStyles.unikoBlack};
    z-index: 400;
`

//Main Component
class MarqueeModels extends Component {

    constructor(props){
        super(props);
        // reference to the DOM node
        this.marqueeBoxShadowRef = null
        // reference to the animation
        this.marqueePlusTween = null
    }

    componentDidMount() {
        //Marquee Slide Animation 
        const { content } = this.refs;
            marqueeSlideAnim.add( TweenLite.to(content, DURATION, { transform: `translate3d(${data.length * WIDTH * -1}px, 0, 0)`, ease: Linear.easeNone }));
            marqueeSlideAnim.add( TweenLite.to(content, 0, { transform: `translate3d(0, 0, 0)` }));
        //Plus Sign Animation
        this.marqueePlusTween = new TimelineMax({ paused: true })
            this.marqueePlusTween.to(this.marqueeBoxShadowRef, 0, { zIndex: 1500 } )
            this.marqueePlusTween.to(this.marqueeBoxShadowRef, 0.4, { top: 0, left: 0, width: "100vw", height: "100vh", transformOrigin: "center"} )
    }

    render(){
        return (
            <Fragment>
                <MarqueeBoxStyle>
                    <MarqueeTextStyle ref="content" onMouseEnter={() => { marqueeSlideAnim.pause();}} onMouseLeave={() => { marqueeSlideAnim.play();}}>
                        { data.map( item => {
                            return (
                                //MAKE KEY UNIQUE
                                <MarqueeLinkStyle 
                                    key={item.id} 
                                    href={`#${item.name}`}
                                > 
                                    {item.name} &nbsp;· &nbsp; 
                                </MarqueeLinkStyle>
                            );
                        })}
                    </MarqueeTextStyle>
                </MarqueeBoxStyle>
                <MarqueeBoxShadowStyle ref={ div => this.marqueeBoxShadowRef = div } />
                <MarqueePlus handleClick={() => this.marqueePlusTween.play()} />
            </Fragment>
        );
    }
}


//Exports
export default MarqueeModels;