//Library Imports
import React, { Component } from 'react'
import styled from 'styled-components'
import { TimelineMax } from 'gsap/all'
//Style Imports
import * as sharedStyles from '../../../data/sharedStyles'
//Image Imports
import plusMarquee from '../../../assets/logos&icons/plusWhite.svg'


//Styles
const MarqueePlusSyle = styled.img`
    position: absolute;
    top: calc(${ sharedStyles.h30px} + 120px);
    left: ${sharedStyles.w50px};
    cursor: pointer;
`


//Main Component
class MarqueePlus extends Component {

    constructor(props){
        super(props);
        // reference to the DOM node
        this.marqueePlusRef = null
        // reference to the animation
        this.marqueePlusTween = null
    }

    componentDidMount(){
        // use the node ref to create the animation
        this.marqueePlusTween = new TimelineMax({ paused: true })
            this.marqueePlusTween.to(this.marqueePlusRef, 0.4, { rotation: 90 })
    }

    render(){
        return (
            <MarqueePlusSyle 
                src={plusMarquee} 
                ref={img => this.marqueePlusRef = img} 
                onMouseEnter = {() => this.marqueePlusTween.play()} 
                onMouseLeave = {() => this.marqueePlusTween.reverse()} 
                onClick={this.props.handleClick}
            />
        );
    }

}


//Exports
export default MarqueePlus;