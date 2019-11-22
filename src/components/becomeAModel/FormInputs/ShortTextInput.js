//Library Imports
import React from 'react'
import styled from 'styled-components'
//Style Imports
import * as sharedStyles from '../../../data/sharedStyles'


//Styles
const ShortTextFormInputStyle = styled.input`
    display: inline-block;
    margin-top: ${sharedStyles.h40px};
    width: ${sharedStyles.w400px};
    height: ${sharedStyles.h40px};
    height: 36px;
    border: 0;
    border-bottom: 1px solid ${sharedStyles.unikoBlack};
    background-color: transparent;
    outline: none;
    font-family: "Gotham-Book";
    font-size: 12px;
    color: ${sharedStyles.unikoBlack};
    text-transform: uppercase;
    margin-top: ${sharedStyles.h10px};
    margin-right: ${sharedStyles.w20px};
    padding-left: 10px;
    &:first-of-type{
        margin-top: ${sharedStyles.h20px}; 
    }
`


//Main Component
function ShortTextInput(props) {

    return (            
        <ShortTextFormInputStyle 
            id={props.id}
            name={props.name}
            type="text"
            onChange={props.onChange}
            value={props.value}
            placeholder={props.placeholder}
        />
    )
}

//Export
export default ShortTextInput;