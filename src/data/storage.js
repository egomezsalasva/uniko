


const SubmenuOptionsContainerStyle = styled.div`
    display: inline-block;
    position: relative;
    width: 90px;
    //height: 70px;
    left: 0;
    top: 0;
    z-index: ${sharedStyles.zSubmenuModelsBg};
    transform: translateY(-7px);
`
const SubmenuOptionsStyle = styled.h3`
    display: inline-block;
    position: relative;
    width: 90px;
    line-height:  calc(70px/3);
    font-family: 'Gotham-Black';
    font-size: 16px;
    color: ${sharedStyles.unikoBlack};
    color: ${props => props.active ? sharedStyles.unikoBlack : sharedStyles.unikoWhite };
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: ${sharedStyles.unikoBlack};
    text-transform: uppercase;
    letter-spacing: 1px;
`
// const SubmenuLinesContainerStyle = styled.div`
//     display: inline-block;
//     position: relative;
//     //width: 390px;
//     width: 326px;
//     height: 70px;
//     left: 0;
//     top: 0;
//     z-index: ${sharedStyles.zSubmenuModelsBg};
// `
const SubmenuLineContainerStyle = styled.div`
    display: inline-block;
    position: relative;
    //width: 390px;
    width: 326px;
    height: calc(70px/3);
    left: 0;
    top: 0;
    z-index: ${sharedStyles.zSubmenuModelsBg};
`
const SubmenuLineStyle = styled.div`
    display: inline-block;
    position: relative;
    background: black;
    width: ${props => props.active ? "326px" : "0px" };
    //height: 2px;
    height: 1px;
    left: 0;
    top: 50%;
    z-index: ${sharedStyles.zSubmenuModelsBg};
`
// const SubmenuFilterContainerStyle = styled.div`
//     display: inline-block;
//     position: relative;
//     width: 400px;
//     height: 70px;
//     top: 0;
//     transform: translateY(-5px);
// `
const SubmenuFilterSubcontainerStyle = styled.div`
    display: inline-block;
    position: relative;
    //width: 380px;
    width: 420px;
    left: 20px;
    height: calc(70px/3);
    opacity: ${props => props.active ? "1" : "0" };
`
const SubmenuFilterOptionStyle = styled.h3`
    display: inline;
    position: relative;
    line-height:  calc(70px/3);
    font-family: 'Gotham-Black';
    font-size: 16px;
    padding: 0 10px;
    color: ${props => props.active ? sharedStyles.unikoBlack : sharedStyles.unikoWhite };
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: ${sharedStyles.unikoBlack};
    text-transform: uppercase;
    letter-spacing: 1px;
`