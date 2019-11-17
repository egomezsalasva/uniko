//Library Imports
import React from 'react'
import styled from 'styled-components'
//Style Imports
import * as sharedStyles from '../../data/sharedStyles'


//Styles
const BecomeAModelInfoContainerStyle = styled.div`
    position: absolute;
    top: ${sharedStyles.h190px};
    left: ${sharedStyles.w50px};
    width: ${sharedStyles.w420px};
`
const BecomeAModelTitleStyle = styled.h1`
    width: ${sharedStyles.w260px};
    font-family: "Gotham-Black";
    font-size: 42px;
    color: ${sharedStyles.unikoBlack};
    letter-spacing: 1px;
    line-height: 44px;
    text-transform: uppercase;
`
const BecomeAModelSubtitleStyle = styled.h3`
    margin-top: ${sharedStyles.h40px};
    width: ${sharedStyles.w420px};
    font-family: "Gotham-Black";
    font-size: 22px;
    color: ${sharedStyles.unikoBlack};
    letter-spacing: 0.52px;
    text-transform: uppercase;
`
const BecomeAModelInfoStyle = styled.p`
    margin-top: ${sharedStyles.h30px};
    width: ${sharedStyles.w420px};
    width: ${sharedStyles.w420px};
    font-family: "Gotham-Book";
    font-size: 16px;
    color: ${sharedStyles.unikoBlack};
    line-height: 20px;
`


//Main Component
function BecomeAModelInfo() {
    return(
        <BecomeAModelInfoContainerStyle>
            <BecomeAModelTitleStyle>Become <br/>a model</BecomeAModelTitleStyle>
            <BecomeAModelSubtitleStyle>¿Qué buscamos?</BecomeAModelSubtitleStyle>
            <BecomeAModelInfoStyle>
                Chicas de 15 - 22 años + 1.73cm <br/>
                Chicos de +16 años +1.83 cm <br/>
                Envíanos un máximo de 4 fotografías de <br/> cuerpo completo, naturales y sin maquillaje.
            </BecomeAModelInfoStyle>
        </BecomeAModelInfoContainerStyle>
    )
}


//Export
export default BecomeAModelInfo;
