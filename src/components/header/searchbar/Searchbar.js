//Library Imports
import React, {Component, Fragment} from 'react'
import styled from 'styled-components'
import { TimelineMax } from 'gsap/all'
//Style Imports
import * as sharedStyles from '../../../data/sharedStyles'
//Image Imports
import magnifyingGlass from '../../../assets/logos&icons/magnifyingGlass.svg'


//Styles
const SearchboxStyle = styled.div`
    position: absolute;
    top: calc(${sharedStyles.h30px} + 50px);
    right: ${sharedStyles.w40px};
    background: ${sharedStyles.unikoBlack};
    width: 42px;
    height: 40px;
    z-index: 150;
    cursor: pointer;
`
const MagnifyingGlassIconStyle = styled.img`
    position: absolute;
    // right: 11.5px;
    // top: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const SearchboxShadowStyle = styled.div`
    position: absolute;
    top: calc(${sharedStyles.h30px} + 50px);
    right: ${sharedStyles.w40px};
    background: ${sharedStyles.unikoBlack};
    width: 42px;
    height: 40px;
    z-index: 149;
    cursor: pointer;
`


//Main Component
class Searchbar extends Component {

    constructor(props){
        super(props);
        // reference to the DOM node
        this.searchboxRef = null
        // reference to the animation
        this.searchTween = null
    }

    componentDidMount(){
        this.searchTween = new TimelineMax({ paused: true, reversed: true })
            this.searchTween.to(this.searchboxRef, 0.4, {})
    }

    seachTweenClick = (e) => {
        e.preventDefault()
        this.searchTween.reversed() ? this.searchTween.play() : this.searchTween.reverse();
    }

    render() {
        return (
            <Fragment>
                <SearchboxStyle onClick={ this.seachTweenClick } ref={div => this.searchboxRef = div}>
                    <MagnifyingGlassIconStyle src={magnifyingGlass} />
                </SearchboxStyle>
                <SearchboxShadowStyle />
            </Fragment>
        )
    }
}


//Exports
export default Searchbar