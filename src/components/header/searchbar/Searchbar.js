//Library Imports
import React, {Component, Fragment} from 'react'
import { Link } from "react-router-dom"
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
    position: fixed;
    top: calc(${sharedStyles.h30px});
    right: calc(${sharedStyles.w40px} + 52px);
    background: ${sharedStyles.unikoBlack};
    width: 42px;
    height: 40px;
    z-index: ${sharedStyles.zSearchbox};
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
    width: 360px;
    background: rgba(0, 0, 0, 0.0);
    border: none;
    color: ${sharedStyles.unikoWhite}; 
    font-family: Gotham-BookItalic;
    font-size: 14px;
    outline: none;
    display: none;
`
const SearchboxShadowStyle = styled.div`
    position: fixed;
    top: calc(${sharedStyles.h30px});
    right: calc(${sharedStyles.w40px} + 52px);
    background: ${sharedStyles.unikoBlack};
    width: 42px;
    height: 40px;
    z-index: ${sharedStyles.zSearchboxShadow};
    cursor: pointer;
    display: none;
`
const OpenDirectoryStyle = styled.div`
    position: absolute;
    z-index: ${sharedStyles.zOpenDirectory};
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
    position: fixed;
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
const DirectoryIndexContainerStyleWidth = "68.0555556vw"
const DirectoryIndexContainerStyle = styled.div`
    position: fixed;
    width: ${DirectoryIndexContainerStyleWidth};
    height: 70vh;
    left: 50%;
    top: calc(50% + 2%);
    transform: translate(-50%, -50%);
    overflow: scroll; 
`
const DirectoryIndexInnerContainerStyle = styled.div`
    position: absolute;
    width: ${DirectoryIndexContainerStyleWidth};
    //height: 70vh;
    columns: 4;
    //column-gap: 45px;
    column-width: calc(${DirectoryIndexContainerStyleWidth}/5);
    column-fill: auto;
`
const ListOfNamesLinkStyle = styled(Link)`
    margin: 0;
    padding: 0;
    text-decoration: none;
`
const ListOfNamesStyle = styled.p`
    margin: 0;
    padding: 0;
    font-family: Gotham-BookItalic;
    font-size: 14px;
    color: ${sharedStyles.unikoWhite};
    line-height: 16px;
    text-transform: uppercase;
    margin-bottom: 5px;
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
            this.searchTween.to(this.searchboxRef, 0.8, { width: "440px", zIndex: sharedStyles.zSearchboxActive, borderBottom: "2px solid white" })
            this.searchTween.to(this.filterInputRef, 0.0, { display: "block" })


            this.searchTween.to(this.openDirectoryRef, 0.0, {display: "block", zIndex: sharedStyles.zSearchboxDirectory })
            this.searchTween.fromTo(this.openDirectoryRef, 0.4, { opacity:0 }, { opacity: 1 }, "-=0.4")
    }

    state = {
        modelDB: MODEL_DB,
        search: "",
    }

    updateSearch = e => {
        this.setState({search: e.target.value.substr(0, 70).toUpperCase()})
    }



    render() {

        const filteredModelDB = this.state.modelDB.filter((model) => {
            //Database Data
            const modelNameDB = model.name.toUpperCase()
            const modelSplitNameDB = model.name.toUpperCase().split(" ") //split each word (name and surname)
            //Text Input Data
            const inputNameSearch = this.state.search.toUpperCase()
            //RegEx
            const matchingFromFront = new RegExp("^" + inputNameSearch);
            //Look for matches
            return matchingFromFront.test(modelSplitNameDB[0]) //check for Name 
                   || matchingFromFront.test(modelSplitNameDB[1]) // surname01 
                   || matchingFromFront.test(modelSplitNameDB[2]) // surname02 
                   || matchingFromFront.test(modelSplitNameDB[3]) // surname03 (better change to index and loop))
                   || modelNameDB.indexOf(matchingFromFront) !== -1 //match full name with space (not working!!!)
        })

        const whiteSpaceRegEx = / /g;


        return (
            <Fragment>
                <SearchboxStyle onClick={ () => this.searchTween.play() } ref={div => this.searchboxRef = div}>
                    <MagnifyingGlassIconStyle src={magnifyingGlass} />
                    <FilterInputStyle 
                        type="text" 
                        placeholder="Search For Model Here"  
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
                            <DirectoryIndexInnerContainerStyle>
                                {/* //TODO: Map profile photo to follow cursor on hover */}
                                {filteredModelDB.map(function(model, i){
                                    return <ListOfNamesLinkStyle to={`/modelos/${model.name.replace(whiteSpaceRegEx, "-").toLowerCase()}`} key={i}>
                                                <ListOfNamesStyle>
                                                    {model.name}
                                                </ListOfNamesStyle>
                                                
                                            </ListOfNamesLinkStyle>
                                })}
                            </DirectoryIndexInnerContainerStyle>
                        </DirectoryIndexContainerStyle>
                        

                    </DirectoryContainerStyle>
                </OpenDirectoryStyle>

            </Fragment>
        )
    }
}


//Exports
export default Searchbar