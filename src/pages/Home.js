//Library Imports
import React, {Component, Fragment} from 'react'
//Component Imports
import HeroHomeSlideshow from '../components/home/heroHomeSlideshow/HeroHomeSlideshow'
//import MarqueeModels from '../components/home/marquee/MarqueeModels'


//Main Component
class Home extends Component {
    render(){
        return (
            <Fragment>
                <HeroHomeSlideshow />
                {/* <MarqueeModels /> */}
            </Fragment>
        );
    }
}


//Export
export default Home;