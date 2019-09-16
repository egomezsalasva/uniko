//Library Imports
import React, {Component, Fragment} from 'react'
import styled from 'styled-components'
import { TimelineMax } from 'gsap/all'
//Style Imports
import * as sharedStyles from '../../../data/sharedStyles'
//Image Imports
import magnifyingGlass from '../../../assets/logos&icons/magnifyingGlass.svg'
import crossDirectory from '../../../assets/logos&icons/plusWhite.svg'
//Data Imports
import MODEL_DB from '../../../data/MODEL_DB'

//Styles
const SearchboxStyle = styled.div`
    position: absolute;
    top: calc(${sharedStyles.h30px});
    right: calc(${sharedStyles.w40px} + 52px);
    background: ${sharedStyles.unikoBlack};
    width: 42px;
    height: 40px;
    z-index: 1500;
    cursor: pointer;
`
const MagnifyingGlassIconStyle = styled.img`
    position: absolute;
    left: 11px;
    top: 10px;
    // top: 50%;
    // left: 50%;
    // transform: translate(-50%, -50%);
`
const FilterInputStyle = styled.input`
    position: relative;
    left: calc(42px + 10px);
    line-height: 36px;
    width: 510px;
    background: transparent;
    border: none;
    color: ${sharedStyles.unikoWhite}; 
    font-family: Gotham-BookItalic;
    font-size: 14px;
    outline: none;
    display: none;
`
const SearchboxShadowStyle = styled.div`
    position: absolute;
    top: calc(${sharedStyles.h30px});
    right: calc(${sharedStyles.w40px} + 52px);
    background: ${sharedStyles.unikoBlack};
    width: 42px;
    height: 40px;
    z-index: 1490;
    cursor: pointer;
    display: none;
`
const OpenDirectoryStyle = styled.div`
    position: absolute;
    z-index: 1490;
    background: ${sharedStyles.unikoBlack};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: none;
`
const DirectoryContainerStyle = styled.div`
    
`
const CloseButtonStyle = styled.div`
    position: absolute;
    top: ${sharedStyles.h30px};
    right: ${sharedStyles.w40px};
    width: 42px;
    height: 40px;
    cursor: pointer;
`
const CrossDirectoryStyle = styled.img`
    position: absolute;
    transform: rotate(45deg);
    top: 9px;
    left: 10px;
    
`
const DirectoryIndexContainerStyle = styled.div`
    position: absolute;
    width: 68.0555556vw;
    height: 70vh;
    //background: red;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    overflow: scroll; 
    columns: 4;
    //column-gap: 45px;
`
const ListOfNamesStyle = styled.a`
    font-family: Gotham-BookItalic;
    font-size: 14px;
    color: ${sharedStyles.unikoWhite};
    line-height: 21px;
    text-transform: uppercase;
    text-decoration: none;
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
            this.searchTween.to(this.searchboxShadowRef, 0.4, {top: 0, right: 0, width: "100vw", height: "100vh", transformOrigin: "center", display: "block" })
            this.searchTween.to(this.searchboxRef, 0.8, { width: "580px", zIndex: "1550", borderBottom: "2px solid white" })
            this.searchTween.to(this.filterInputRef, 0.0, { display: "block" })


            this.searchTween.to(this.openDirectoryRef, 0.0, {display: "block", zIndex: "1500"})
            this.searchTween.fromTo(this.openDirectoryRef, 0.4, { opacity:0 }, { opacity: 1 }, "-=0.4")
    }

    state = {
        modelDB: MODEL_DB,
        search: "",
    }

    updateSearch = e => {
        this.setState({search: e.target.value.substr(0, 70)})
    }



    render() {

        //this.state.search.toUpperCase()

        let filteredModelDB = this.state.modelDB.filter((model) => {
            let modelName = model.name.toUpperCase().split(" ")
            let matchingFromFront = new RegExp("^" + this.state.search.toUpperCase());
            return matchingFromFront.test(modelName[0]) || matchingFromFront.test(modelName[1])
        })

       
        return (
            <Fragment>
                <SearchboxStyle onClick={ () => this.searchTween.play() } ref={div => this.searchboxRef = div}>
                    <MagnifyingGlassIconStyle src={magnifyingGlass} />
                    <FilterInputStyle 
                        type="text" 
                        placeholder="Type Here"  
                        value={this.state.search} 
                        onChange={this.updateSearch}
                        ref={div => this.filterInputRef = div}
                    />
                </SearchboxStyle>
                <SearchboxShadowStyle ref={div => this.searchboxShadowRef = div}/>

                {/* Open Directory */}
                <OpenDirectoryStyle ref={div => this.openDirectoryRef = div}>
                    <DirectoryContainerStyle ref={div => this.directoryContainerRef = div}>
                        {/* Close Button */}
                        <CloseButtonStyle onClick={ () => this.searchTween.reverse() }>
                            <CrossDirectoryStyle src={crossDirectory}/>
                        </CloseButtonStyle>
                        {/* Directory Index Container */}
                        <DirectoryIndexContainerStyle>
                                {filteredModelDB.map(function(model, i){
                                    return <ListOfNamesStyle href={`#${model.name}`} key={i}>{model.name}<br/></ListOfNamesStyle>
                                })}
                        </DirectoryIndexContainerStyle>
                        

                    </DirectoryContainerStyle>
                </OpenDirectoryStyle>

            </Fragment>
        )
    }
}


//Exports
export default Searchbar